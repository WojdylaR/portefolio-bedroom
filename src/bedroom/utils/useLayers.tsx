import * as THREE from 'three'
import { useLayoutEffect, useRef } from 'react'

export default function useLayers<T extends THREE.Object3D>(...layers: number[]) {
  const ref = useRef<T>(null!)
  useLayoutEffect(() => {
    ref.current.traverse((o) => {
      o.layers.disableAll()
      layers.forEach((l) => o.layers.enable(l))
    })
  }, [])
  return ref
}