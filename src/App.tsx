import './App.css'
import { Canvas } from '@react-three/fiber'
import Bedroom from './scenes/bedroom/Bedroom'
import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Lights from './scenes/lights/Lights'
import Camera from './camera/Camera'

function App() {

  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [ 8, 8, 6 ]
        }}
      >
        <color args={ ['#000'] } attach={ 'background' } />

        

        
        <Perf position="top-left" />
        <Lights />
        <OrbitControls makeDefault />
        <Camera />

         <Bedroom />

      </Canvas>
    </>
  )
}

export default App
