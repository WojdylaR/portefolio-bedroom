import { useGLTF, useTexture } from '@react-three/drei'
import Paint from './parts/Paint'
export default function BedroomModel() {

  const { nodes, materials } : {nodes: any, materials: any} = useGLTF('/bedroom.glb')

  

  const spaceshipTexture = useTexture('./spaceship.jpeg')


  return (
    <group >
      <mesh
        name="Untitled"
        castShadow
        receiveShadow
        geometry={nodes.Untitled.geometry}
        material={materials.palette}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        name="Untitled001"
        castShadow
        receiveShadow
        geometry={nodes.Untitled001.geometry}
        material={materials['palette.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        name="Untitled002"
        castShadow
        receiveShadow
        geometry={nodes.Untitled002.geometry}
        material={materials['palette.002']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        name="Untitled003"
        castShadow
        receiveShadow
        geometry={nodes.Untitled003.geometry}
        material={materials['palette.003']}
        rotation={[Math.PI / 2, 0, 0]}
      />

      <Paint geometry={nodes.right_paint.geometry} texture={spaceshipTexture} />
      <Paint geometry={nodes.left_paint.geometry} texture={spaceshipTexture} />
    </group>
  )
}

useGLTF.preload('/bedroom.glb')
