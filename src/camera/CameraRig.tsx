import useScene from "../state/store/useScene";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { OrthographicCamera as OrthographicCameraImpl } from 'three'
import { OrthographicCamera } from "@react-three/drei";
import { IDLE_VIEW, SCREE_VIEW, type CameraView } from './Camera.type'

export default function CameraRig() {

    const focus = useScene(state => state.focus)
    const isFirstFocus = useScene(state => state.isFirstFocus)
    const enableAnimating = useScene(state => state.enableAnimating)
    const ref = useRef<OrthographicCameraImpl>(null)

    function animateToView(view: CameraView) {

        if (ref.current && !isFirstFocus) {
            enableAnimating(true)
            gsap.killTweensOf(ref.current)
            gsap.killTweensOf(ref.current.position)
            gsap.to(ref.current.position, {
                x: view.position[0],
                y: view.position[1],
                z: view.position[2],
                duration: view.animationDuration,
                ease: 'power2.inOut',
                onComplete:() => {
                    enableAnimating(view.orbitEnabled)
                }
            })
            gsap.to(ref.current, {
                zoom: view.zoom,
                near: view.near,
                ease: 'power2.inOut',
                duration: view.animationDuration,
                onUpdate: () => {
                    ref.current?.updateProjectionMatrix()
                }
            })
        }
    }


    useEffect(() => {
        
        animateToView(focus === 'screen' ? SCREE_VIEW : IDLE_VIEW)
    
    }, [focus])

    return <OrthographicCamera
        ref={ref}
        {...IDLE_VIEW}
        makeDefault
        far={200}  
    />
}