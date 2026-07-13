import { useGLTF, useTexture } from '@react-three/drei'
import Paint from './parts/Paint'
import { useControls } from 'leva'
import Screen from './parts/Screen'


export default function BedroomModel() {

  const { nodes, materials } : {nodes: any, materials: any} = useGLTF('/bedroom/bedroom.glb')

  const spaceshipTexture = useTexture('./spaceship.jpeg')
  const galaxyTexture = useTexture('./galaxy.jpg')

  const bakedRoom = useTexture('./bedroom/baked4096LessAO.png')
  bakedRoom.flipY = false
  bakedRoom.anisotropy = 16


  const { orangeGlow } = useControls('orangeGlow' , {

    orangeGlow: {
      value: 7,
      step: 0.1,
      min: 0,
      max: 100
    }
  })
  const { whiteGlow } = useControls('whiteGlow' , {

    whiteGlow: {
      value: 20,
      step: 0.1,
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
        material={nodes.room.material}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial map={bakedRoom} />
        </mesh>

      
      <Screen  geometry={nodes.screen.geometry}/>
      
      
      <mesh
        name="whiteLight"
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
        <meshStandardMaterial color={' #ff7112'} emissive={ '#ff7112'  } emissiveIntensity={ orangeGlow } toneMapped={false}/>
      </mesh>

      <Paint geometry={nodes.right_paint.geometry} texture={galaxyTexture} />
      <Paint geometry={nodes.left_paint.geometry} texture={spaceshipTexture} />
    </group>
  )
}


