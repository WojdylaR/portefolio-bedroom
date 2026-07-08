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
import { useRef } from 'react'

function App() {
  
  const isAnimating = useScene(state => state.isAnimating)
  const isControls = useScene(state => state.isControls)

  
  const orbitControlRef = useRef(null)


  return (
    <>
      <Canvas
        shadows
      >
        <color args={ ['#1e1e1e'] } attach={ 'background' } />

        
        <Leva  hidden/>
        
        {/* <Perf position="top-left" /> */}

        <PostProcessing />
        <OrbitControls ref={ orbitControlRef } makeDefault enabled={!isAnimating && isControls} enablePan={true}/>

        <Center>

        
          <Lights />
          <CameraRig orbitControlRef={orbitControlRef}/>


          <Bedroom />
         </Center>

      </Canvas>
      <Interface />
    </>
  )
}

export default App
