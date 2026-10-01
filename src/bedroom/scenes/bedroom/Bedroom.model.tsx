import { useGLTF, useTexture } from '@react-three/drei'
import Paint from './parts/Paint'
import { useControls } from 'leva'
import Screen from './parts/Screen'
import Door from './parts/Door'
import { useState } from 'react'
import PointLightDoor from '../lights/PointLightDoor'
import PointLightLamp from '../lights/PointLightLamp'


export default function BedroomModel() {

  const { nodes, materials } : {nodes: any, materials: any} = useGLTF('/bedroom/bedroom.glb')

  const planetTexture = useTexture('./bedroom/planet.png')
  const galaxyTexture = useTexture('./bedroom/galaxy.jpg')

  const bakedRoom = useTexture('./bedroom/bakedv3.webp')
  bakedRoom.flipY = false
  bakedRoom.anisotropy = 16

  const [ orangeLight, setOrangeLight ] = useState(true) 
  const [ whiteLight, setWhiteLight ] = useState(false) 

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


  return (<>
      <group  >
          
          <mesh
            name="room001"
            castShadow
            receiveShadow
            geometry={nodes.room.geometry}
            rotation={[Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial map={bakedRoom} />
        </mesh>

        <Door geometry={nodes.door.geometry} />
        
        <Screen  geometry={nodes.screen.geometry}/>
        
        
        <mesh
          name="whiteLight"
          geometry={nodes.whiteLight.geometry}
          material={materials['palette.001']}
          rotation={[Math.PI / 2, 0, 0]}
          onPointerOver={() => { document.body.style.cursor = 'pointer' }}
          onPointerOut={() => { document.body.style.cursor = 'auto' }}
          onClick={() => setWhiteLight(value => !value)}
        >
          <meshStandardMaterial emissive={ '#9db8e0'  } emissiveIntensity={ whiteLight ? whiteGlow : 0 } toneMapped={false}/>
        </mesh>
        <mesh
          name="orangeLight"
          geometry={nodes.orangeLight.geometry}
          rotation={[Math.PI / 2, 0, 0]}
          onPointerOver={() => { document.body.style.cursor = 'pointer' }}
          onPointerOut={() => { document.body.style.cursor = 'auto' }}
          onClick={() => setOrangeLight(value => !value)}
        >
          <meshStandardMaterial color={' #ff7112'} emissive={ '#ff7112'  } emissiveIntensity={ orangeLight ? orangeGlow : 0 } toneMapped={false}/>
        </mesh>

        <Paint geometry={nodes.right_paint.geometry} texture={galaxyTexture} />
        <Paint geometry={nodes.left_paint.geometry} texture={planetTexture} />
      </group>
    <PointLightDoor state={whiteLight} />
    <PointLightLamp state={orangeLight} />
    </>
  )
}
