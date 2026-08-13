import { useThree } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Vector3 } from "three"
import gsap from "gsap"
import useAuditoriumScene from "../state/useAuditoriumScene"
import { SCENE_POSITION } from "./mesh/Scene"
import { cameraDefault } from "../config/camera"

const DEFAULT_TARGET = new Vector3(...cameraDefault.lookAt)

export default function CameraRig() {
  const camera = useThree((s) => s.camera)
  const cameraPosition = useAuditoriumScene((s) => s.cameraPosition)
  const setAnimating = useAuditoriumScene((s) => s.setAnimating)

  const target = useRef(new Vector3().copy(DEFAULT_TARGET))

  useEffect(() => {
    const dest = cameraPosition ?? cameraDefault.position
    const look = cameraPosition ? SCENE_POSITION : DEFAULT_TARGET

    gsap.killTweensOf([camera.position, target.current])
    setAnimating(true)

    gsap.to(camera.position, {
      x: dest[0],
      y: dest[1], 
      z: dest[2],
      duration: 1.6,
      ease: "power2.inOut",
      onUpdate: () => camera.lookAt(target.current),
      onComplete: () => setAnimating(false),
    })

    gsap.to(target.current, {
      x: look.x,
      y: look.y,
      z: look.z,
      duration: 1.6,
      ease: "power2.inOut",
    })
  }, [cameraPosition])

  return null
}