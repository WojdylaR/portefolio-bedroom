import { useGLTF } from "@react-three/drei"
import * as THREE from 'three'
import CustomShaderMaterial from "three-custom-shader-material"
import type { TileProps } from "../../artGalery.type"
import { useShaderUniforms } from "../useShadersUniforms"
import { MAT } from "../materials"
import useScene from "../../../../state/store/useScene"
import { useMemo } from "react"


export default function FloorFrame (   { position, rotation, art, id = null } : TileProps) {

    const { nodes } : { nodes: any, }= useGLTF('/bedroom/artGallery/floor-frame.glb')
    
    const uniforms = useShaderUniforms(art)
    const setFocus = useScene(state => state.setFocus)
    const focus = useScene(state => state.focus)

    const geometry = useMemo(() => {
        const g = new THREE.PlaneGeometry(2.8, 2.8, 150, 150)
        g.rotateX(-Math.PI / 2)
        return g
    }, [])

    return ( 
    <group position={position} rotation-y={ rotation }>
            
        <mesh
            castShadow
            receiveShadow
            geometry={nodes['floor-frame'].geometry}
            material={MAT.white}
        />
        <mesh
            castShadow
            receiveShadow
            material={nodes.frame.material}
            position={[0, 0.91, 0]}

            geometry={geometry}

            onPointerEnter={() => document.body.style.cursor = 'pointer'}
            onPointerLeave={() => document.body.style.cursor = 'default'} 

            onClick={() => focus !== id ? setFocus(id) : setFocus(null)}
            >

            { art && <>
                <CustomShaderMaterial
                            baseMaterial={ THREE.MeshStandardMaterial }
                            vertexShader={ art.vertexShader }
                            fragmentShader={ art.fragmentShader }
                            uniforms={uniforms}
                    />
                    </>
                }
                </mesh>
                
        <mesh
            castShadow
            receiveShadow
            geometry={nodes['frame-border'].geometry}
            material={MAT.black}
            position={[0, 1, 0]}
        />



    </group>
    )
}