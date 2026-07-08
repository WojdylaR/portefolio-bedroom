import { useGLTF, useTexture } from '@react-three/drei'
import Paint from './parts/Paint'
import { useControls } from 'leva'
import Screen from './parts/Screen'


export default function BedroomModel() {

  const { nodes, materials } : {nodes: any, materials: any} = useGLTF('/bedroom/bedroomTest.glb')

  const spaceshipTexture = useTexture('./spaceship.jpeg')
  const galaxyTexture = useTexture('./galaxy.jpg')

  const roomTexture = useTexture('./bedroom/roomBaked.png')
  roomTexture.flipY = false


  const LastTest = useTexture('./bedroom/LastTest.png')
  LastTest.flipY = false


  const bedBaked = useTexture('./bedroom/bedBaked.png')
  bedBaked.flipY = false


  const { orangeGlow } = useControls('orangeGlow' , {

    orangeGlow: {
      value: 13.5,
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
        name="screen"
        geometry={nodes.screen.geometry}
        material={nodes.screen.material}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        name="desktop"
        geometry={nodes.desktop.geometry}
        material={nodes.desktop.material}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial map={LastTest} />
        </mesh> 
      <mesh
        name="room"
        geometry={nodes.room.geometry}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial map={roomTexture} />
        </mesh> 
      <mesh
        name="bed"
        geometry={nodes.bed.geometry}
        material={nodes.bed.material}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial map={bedBaked} />
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
        <meshStandardMaterial color={' #97562a'} emissive={ '#97562a'  } emissiveIntensity={ orangeGlow } toneMapped={false}/>
      </mesh>

      <Paint geometry={nodes.right_paint.geometry} texture={galaxyTexture} />
      <Paint geometry={nodes.left_paint.geometry} texture={spaceshipTexture} />
    </group>
  )
}


