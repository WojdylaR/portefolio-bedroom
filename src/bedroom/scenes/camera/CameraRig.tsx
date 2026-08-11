import useScene from "../../state/store/useScene";
import { useEffect, useLayoutEffect, useMemo, useRef, type RefObject } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { OrthographicCamera as OrthographicCameraImpl } from 'three'
import { OrthographicCamera } from "@react-three/drei";
import { type CameraView } from './Camera.type'
import { IDLE_VIEW, VIEW } from './view'
import { Vector3 } from "three";
import type { OrbitControls } from "three/examples/jsm/Addons.js";
import { TRANSITION } from "../../config/animation";

const FILL = 0.92


export default function CameraRig({ orbitControlRef }: { orbitControlRef: RefObject<OrbitControls | null> }) {

    const size = useThree(state => state.size)
    const focus = useScene(state => state.focus)
    const isFirstFocus = useScene(state => state.isFirstFocus)
    const setIsControls = useScene(state => state.setIsControls)
    const setIsAnimating = useScene(state => state.setIsAnimating)
    const ref = useRef<OrthographicCameraImpl>(null)
    const lookAtRef = useRef(new Vector3(...IDLE_VIEW.target))
    const savedViewRef = useRef({
        position: new Vector3(...IDLE_VIEW.position),
        target: new Vector3(...IDLE_VIEW.target)
    })

    const state = useScene(state => state.state)
    const hasIntroPlayed = useRef(false)

    const idleZoom = useMemo(() => Math.min(
        (size.width * FILL) / IDLE_VIEW.width,
        (size.height * FILL) / IDLE_VIEW.height,
    ), [size.width, size.height])

    function animateToView(view: CameraView) {

        if (!ref.current || isFirstFocus) return

        const zoomValue = Math.min(
            (size.width * FILL) / view.width,
            (size.height * FILL) / view.height,
        )

        if (!view.orbitEnabled && orbitControlRef.current) {
            lookAtRef.current.copy(orbitControlRef.current.target)
            savedViewRef.current.position.copy(ref.current.position)
            savedViewRef.current.target.copy(orbitControlRef.current.target)
        }

        const targetPosition = view.orbitEnabled
            ? [savedViewRef.current.position.x, savedViewRef.current.position.y, savedViewRef.current.position.z]
            : view.position

        const targetLookAt = view.orbitEnabled
            ? [savedViewRef.current.target.x, savedViewRef.current.target.y, savedViewRef.current.target.z]
            : view.target

        setIsAnimating(true)

        gsap.killTweensOf(ref.current)
        gsap.killTweensOf(ref.current.position)
        gsap.killTweensOf(lookAtRef.current)

        gsap.to(ref.current.position, {
            x: targetPosition[0],
            y: targetPosition[1],
            z: targetPosition[2],
            duration: view.animationDuration,
            ease: 'power2.inOut',
            onComplete: () => {
                setIsControls(view.orbitEnabled)
                setIsAnimating(false)
                if (view.orbitEnabled && orbitControlRef.current) {
                    orbitControlRef.current.target.copy(lookAtRef.current)
                    orbitControlRef.current.update()
                }
            }
        })

        gsap.to(lookAtRef.current, {
            x: targetLookAt[0],
            y: targetLookAt[1],
            z: targetLookAt[2],
            duration: view.animationDuration,
            ease: 'power2.inOut',
        })

        const logFrom = Math.log(ref.current.zoom)
        const logTo = Math.log(zoomValue)
        const proxy = { t: 0, near: ref.current.near }

        gsap.to(proxy, {
            t: 1,
            near: view.near,
            duration: view.animationDuration,
            ease: 'power2.inOut',
            onUpdate: () => {
                if (!ref.current) return
                ref.current.zoom = Math.exp(logFrom + (logTo - logFrom) * proxy.t)
                ref.current.near = proxy.near
                ref.current.lookAt(lookAtRef.current)
                ref.current.updateProjectionMatrix()
            },
        })
    }

    useEffect(() => {
        if (state !== 'loaded' || hasIntroPlayed.current || !ref.current) return
        hasIntroPlayed.current = true

        setIsAnimating(true)
        setIsControls(false)

        const startZoom = idleZoom * 0.04
        ref.current.zoom = startZoom
        ref.current.updateProjectionMatrix()

        const logFrom = Math.log(startZoom)
        const logTo = Math.log(idleZoom)
        const proxy = { t: 0 }

        gsap.to(proxy, {
            t: 1,
            duration: TRANSITION.fadeDuration,
            delay: TRANSITION.fadeDuration * 0.5,
            ease: 'power2.out',
            onUpdate: () => {
                if (!ref.current) return
                ref.current.zoom = Math.exp(logFrom + (logTo - logFrom) * proxy.t)
                ref.current.updateProjectionMatrix()
            },
            onComplete: () => {
                setIsAnimating(false)
                setIsControls(true)
                if (orbitControlRef.current) {
                    orbitControlRef.current.target.copy(lookAtRef.current)
                    orbitControlRef.current.update()
                }
            },
        })
    }, [state])

    useEffect(() => {
        if (focus && VIEW[focus]) {
            animateToView(VIEW[focus])
        } else {
            animateToView({
                ...IDLE_VIEW,
                position: [savedViewRef.current.position.x, savedViewRef.current.position.y, savedViewRef.current.position.z],
                target: [savedViewRef.current.target.x, savedViewRef.current.target.y, savedViewRef.current.target.z]
            })
        }
    }, [focus])

    useEffect(() => {
        if (!ref.current || !hasIntroPlayed.current) return
        const view = (focus && VIEW[focus]) ? VIEW[focus] : IDLE_VIEW
        ref.current.zoom = Math.min(
            (size.width * FILL) / view.width,
            (size.height * FILL) / view.height,
        )
        ref.current.updateProjectionMatrix()
    }, [size.width, size.height])

    useLayoutEffect(() => {
        if (ref.current) {
            ref.current.layers.enable(1)
            ref.current.layers.enable(2)
        }
    }, [ref])

    return <OrthographicCamera
        ref={ref}
        position={IDLE_VIEW.position}
        near={IDLE_VIEW.near}
        makeDefault
        far={200}
    />
}