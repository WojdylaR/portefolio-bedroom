import useScene from "../state/store/useScene";
import { useEffect, useMemo, useRef, type RefObject } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { OrthographicCamera as OrthographicCameraImpl } from 'three'
import { OrthographicCamera } from "@react-three/drei";
import { IDLE_VIEW, SCREE_VIEW, type CameraView } from './Camera.type'
import { Vector3 } from "three";
import type { OrbitControls } from "three/examples/jsm/Addons.js";

const FILL = 0.8
const SCREEN_W = 1.3
const SCREEN_H = 0.8

const ROOM_W = 10
const ROOM_H = 8


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

    const screenZoom = useMemo(() => Math.min(
        (size.width * FILL) / SCREEN_W,
        (size.height * FILL) / SCREEN_H,
    ), [size])

    
    const idleZoom = useMemo(() => Math.min(
        (size.width * 0.9) / ROOM_W,
        (size.height * 0.9) / ROOM_H,
    ), [size])

    function animateToView(view: CameraView, zoom: number) {

        if (!ref.current || isFirstFocus) return

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

        gsap.to(ref.current, {
            zoom: zoom,
            near: view.near,
            duration: view.animationDuration,
            ease: 'power2.inOut',
            onUpdate: () => {
                ref.current?.lookAt(lookAtRef.current)
                ref.current?.updateProjectionMatrix()
            },
        })
    }

    useEffect(() => {
        if (focus === 'screen') {
            animateToView(SCREE_VIEW, screenZoom)
        } else {
            animateToView({
                ...IDLE_VIEW,
                position: [savedViewRef.current.position.x, savedViewRef.current.position.y, savedViewRef.current.position.z],
                target: [savedViewRef.current.target.x, savedViewRef.current.target.y, savedViewRef.current.target.z]
            }, idleZoom)
        }
    }, [focus])

    useEffect(() => {
        if (!ref.current) return
        gsap.to(ref.current, {
            zoom: focus === 'screen' ? screenZoom : idleZoom,
            duration: 0.1,
            ease: 'power2.out',
            onUpdate: () => ref.current?.updateProjectionMatrix(),
        })
    }, [screenZoom, idleZoom])

    return <OrthographicCamera
        ref={ref}
        {...IDLE_VIEW}
        makeDefault
        far={200}
    />
}