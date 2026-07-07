import { useGLTF, useTexture } from '@react-three/drei'
import Paint from './parts/Paint'
import { useControls } from 'leva'
import Screen from './parts/Screen'


export default function BedroomModel() {

  const { nodes, materials } : {nodes: any, materials: any} = useGLTF('/bedroom.glb')

  const spaceshipTexture = useTexture('./spaceship.jpeg')
  const galaxyTexture = useTexture('./galaxy.jpg')


  const { orangeGlow } = useControls('orangeGlow' , {

    orangeGlow: {
      value: 3.5,
      step: 0.1,
      min: 0,
      max: 100
    }
  })
  const { whiteGlow } = useControls('whiteGlow' , {

    whiteGlow: {
      value: 8,
      step: 0.1,
      min: 0,
      max: 100
    }
  })


  return (
    <group >
      <mesh
        name="desktop"
        castShadow
        receiveShadow
        geometry={nodes.desktop.geometry}
        material={materials['palette.025']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        name="room"
        castShadow
        receiveShadow
        geometry={nodes.room.geometry}
        material={materials['palette.026']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        name="bed"
        castShadow
        receiveShadow
        geometry={nodes.bed.geometry}
        material={materials['palette.031']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      
      <Screen  geometry={nodes.screen.geometry}/>
      
      
      <mesh
        name="whiteLight"
        castShadow
        receiveShadow
        geometry={nodes.whiteLight.geometry}
        material={materials['palette.001']}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial emissive={ '#9db8e0'  } emissiveIntensity={ whiteGlow } toneMapped={false}/>
      </mesh>
      <mesh
        name="orangeLight"
        geometry={nodes.orangeLight.geometry}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial emissive={ '#da8045'  } emissiveIntensity={ orangeGlow } toneMapped={false}/>
      </mesh>

      <Paint geometry={nodes.right_paint.geometry} texture={galaxyTexture} />
      <Paint geometry={nodes.left_paint.geometry} texture={spaceshipTexture} />
    </group>
  )
}


