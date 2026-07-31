import { useEffect } from "react";
import HeadphoneModel from "./Headphone.model";
import { useConfigurator } from "../../store/configurator";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { TRANSITION } from "../../config/animation";

export default function Headphone() {

    const camera = useThree(scene => scene.camera)
    const state = useConfigurator(state => state.state)

    useEffect(() => {
        gsap.to(camera.position, {
            x: 0, 
            y: 1.57, 
            z: 5,
            delay: TRANSITION.fadeDuration / 2,
            duration: TRANSITION.appearDelay,
            ease: 'power2.inOut',
        })
    }, [state])


    return (
        <>
            <HeadphoneModel />
        </>
    )
}