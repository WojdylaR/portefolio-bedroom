import { useGLTF, useTexture } from '@react-three/drei'
import Paint from './parts/Paint'
import { useControls } from 'leva'
export default function BedroomModel() {

  const { nodes, materials } : {nodes: any, materials: any} = useGLTF('/bedroom.glb')

  

  const spaceshipTexture = useTexture('./spaceship.jpeg')
  const galaxyTexture = useTexture('./galaxy.jpg')

  console.log(nodes)

  const { intensity } = useControls('orangeGlow' , {

    intensity: {
      value: 10,
      step: 1,
      min: 0,
      max: 100
    }
  })


  return (
    <group >
       <mesh
        name="room"
        castShadow
        receiveShadow
        geometry={nodes.room.geometry}
        material={materials.palette}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        name="whiteLight"
        castShadow
        receiveShadow
        geometry={nodes.whiteLight.geometry}
        material={materials['palette.001']}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color={ [10, 10, 10] } toneMapped={false}/>
      </mesh>
      <mesh
        name="oragneLight"
        geometry={nodes.oragneLight.geometry}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color={ [1.0 * intensity , 0.616 * intensity, 0.361 * intensity] } toneMapped={false}/>
      </mesh>
      <mesh
        name="desktop"
        castShadow
        receiveShadow
        geometry={nodes.desktop.geometry}
        material={materials['palette.005']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        name="bed"
        castShadow
        receiveShadow
        geometry={nodes.bed.geometry}
        material={materials['palette.006']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      

      <Paint geometry={nodes.right_paint.geometry} texture={galaxyTexture} />
      <Paint geometry={nodes.left_paint.geometry} texture={spaceshipTexture} />
    </group>
  )
}

useGLTF.preload('/bedroom.glb')