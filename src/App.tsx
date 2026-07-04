import './App.css'
import { Canvas } from '@react-three/fiber'
import Bedroom from './scenes/bedroom/Bedroom'
import { Center, OrbitControls } from '@react-three/drei'
// import { Perf } from 'r3f-perf'
import Lights from './scenes/lights/Lights'
import Camera from './camera/Camera'
import { Leva } from 'leva'
import PostProcessing from './scenes/postproccessing/PostProcessing'

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
      >b
        <color args={ ['#0e0e0e'] } attach={ 'background' } />

        
        <Leva  hidden/>
        
        {/* <Perf position="top-left" /> */}

        <PostProcessing />
        <OrbitControls makeDefault />

        <Center>

        
          <Lights />
          <Camera />


          <Bedroom />
         </Center>

      </Canvas>
    </>
  )
}

export default App
