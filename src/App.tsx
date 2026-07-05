import './App.css'
import { Canvas } from '@react-three/fiber'
import Bedroom from './scenes/bedroom/Bedroom'
import { Center, OrbitControls } from '@react-three/drei'
// import { Perf } from 'r3f-perf'
import Lights from './scenes/lights/Lights'
import CameraRig from './camera/CameraRig'
import { Leva } from 'leva'
import PostProcessing from './scenes/postproccessing/PostProcessing'
import useScene from './state/store/useScene'
import Interface from './ui/Interface/Interface'

function App() {
  
  const isAnimating = useScene(state => state.isAnimating)

  return (
    <>
      <Canvas
        shadows
      >
        <color args={ ['#4e504d'] } attach={ 'background' } />

        
        <Leva  hidden/>
        
        {/* <Perf position="top-left" /> */}

        <PostProcessing />
        <OrbitControls makeDefault enabled={isAnimating} enablePan={false}/>

        <Center>

        
          <Lights />
          <CameraRig />


          <Bedroom />
         </Center>

      </Canvas>
      <Interface />
    </>
  )
}

export default App
