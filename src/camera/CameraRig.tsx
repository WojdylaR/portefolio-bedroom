import useScene from "../state/store/useScene";
import { useEffect, useRef, type RefObject } from "react";
import gsap from "gsap";
import { OrthographicCamera as OrthographicCameraImpl } from 'three'
import { OrthographicCamera } from "@react-three/drei";
import { IDLE_VIEW, SCREE_VIEW, type CameraView } from './Camera.type'
import { Vector3 } from "three";
import type { OrbitControls } from "three/examples/jsm/Addons.js";

export default function CameraRig({ orbitControlRef } : { orbitControlRef: RefObject<OrbitControls | null>}) {

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

    function animateToView(view: CameraView) {

        if (!ref.current || isFirstFocus) return

        if (!view.orbitEnabled && orbitControlRef.current) {
            lookAtRef.current.copy(orbitControlRef.current.target)
            savedViewRef.current.position.copy(ref.current.position)
            savedViewRef.current.target.copy(orbitControlRef.current.target)
        }

        if (!view.orbitEnabled && orbitControlRef.current) {
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
            zoom: view.zoom,
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
            animateToView(SCREE_VIEW)
        } else {
            animateToView({
                ...IDLE_VIEW,
                position: [savedViewRef.current.position.x, savedViewRef.current.position.y, savedViewRef.current.position.z],
                target: [savedViewRef.current.target.x, savedViewRef.current.target.y, savedViewRef.current.target.z],
            })
        }
    }, [focus])

    return <OrthographicCamera
        ref={ref}
        {...IDLE_VIEW}
     
        makeDefault
        far={200}  
    />
}