import { useMemo, useRef } from 'react'
import { Vector3, Matrix4 } from 'three'
import * as THREE from 'three'
import { Html } from '@react-three/drei'
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js'
import useScene from '../../../state/store/useScene'
import type { ThreeEvent } from '@react-three/fiber'

RectAreaLightUniformsLib.init()

const GLOW_INTENSITY = 25

/** Largeur de l'iframe en px CSS. La hauteur suit le ratio réel de l'écran. */
const IFRAME_WIDTH = 1280

export default function Screen({ geometry }: { geometry: THREE.BufferGeometry }) {

    const setFocus = useScene(state => state.setFocus)
    const focusReset = useScene(state => state.focusReset)
    const focus = useScene(state => state.focus)
        const isAnimating = useScene(state => state.isAnimating)

    const refScreen = useRef<THREE.Mesh>(null!)

    const { position, size } = useMemo(() => {
        if (!geometry.boundingBox) geometry.computeBoundingBox()

        const box = geometry.boundingBox!.clone()
        box.applyMatrix4(new Matrix4().makeRotationX(Math.PI / 2))

        return {
            position: box.getCenter(new Vector3()),
            size: box.getSize(new Vector3()),
        }
    }, [geometry])

    // Iframe au ratio exact de l'écran → plus de déformation
    const iframeHeight = Math.round(IFRAME_WIDTH * (size.y / size.x))
    // En mode transform, drei réduit le DOM de distanceFactor / 400 :
    // on choisit la valeur pour que 1280px = largeur de l'écran
    const distanceFactor = (400 * size.x) / IFRAME_WIDTH

    const screenPosition: [number, number, number] = [position.x + 0.02, position.y, position.z - 0.11]
    const handleClick = (e: ThreeEvent<MouseEvent>) => {
                e.stopPropagation()
                if (isAnimating) return
                setFocus(focus === null ? 'screen' : null)
            }

    return (
        <>
            <mesh
                castShadow
                receiveShadow
                geometry={geometry}
                rotation={[Math.PI / 2, 0, 0]}
                ref={refScreen}
                onPointerEnter={() => document.body.style.cursor = 'pointer'}
                onPointerLeave={() => document.body.style.cursor = 'default'}
                name="screen"
                onClick={handleClick}
                onPointerMissed={focusReset}
            >
                <meshBasicMaterial color="black" />
            </mesh>

            {focus === 'screen' ? (
                // Groupe SANS scale : le <Html> n'hérite plus de [size.x, size.y, 1]
                <group position={screenPosition} rotation={[0, Math.PI, 0]}>
                    <Html
                        transform
                        occlude={[refScreen]}
                        wrapperClass="htmlScreen"
                        distanceFactor={distanceFactor}
                    >
                        <iframe
                            src="./bedroom/ecran-projets.html"
                            title="Projets"
                            style={{ width: IFRAME_WIDTH, height: iframeHeight, border: 0, display: 'block' }}
                        />
                    </Html>
                </group>
            ) : (
                <mesh
                    scale={[size.x, size.y, 1]}
                    position={screenPosition}
                    rotation={[0, Math.PI, 0]}
                >
                    <planeGeometry />
                    <meshStandardMaterial
                        color="#9db8e0"
                        emissive="#ffffff"
                        emissiveIntensity={20}
                        toneMapped={false}
                    />
                </mesh>
            )}

            <rectAreaLight
                position={[position.x + 0.02, position.y, position.z - 0.12]}
                width={size.x}
                height={size.y}
                color="#8fb4ff"
                intensity={GLOW_INTENSITY}
            />
        </>
    )
}