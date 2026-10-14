import { useGLTF, useTexture } from '@react-three/drei'
import Paint from './parts/Paint'
import Screen from './parts/Screen'
import Door from './parts/Door'
import BedLight from './parts/BedLight'
import DoorLight from './parts/DoorLight'

export default function BedroomModel() {

  const { nodes } : {nodes: any} = useGLTF('/bedroom/bedroom.glb')

  const planetTexture = useTexture('./bedroom/planet.png')
  const galaxyTexture = useTexture('./bedroom/galaxy.jpg')

  const bakedRoom = useTexture('./bedroom/bakedv3.webp')
  bakedRoom.flipY = false
  bakedRoom.anisotropy = 16
  
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


        <DoorLight geometry={ nodes.whiteLight.geometry } />

        <BedLight geometry={nodes.orangeLight.geometry} />

        <Paint geometry={nodes.right_paint.geometry} texture={galaxyTexture} />
        <Paint geometry={nodes.left_paint.geometry} texture={planetTexture} />
      </group>
    </>
  )
}
