import './BedroomApp.css'
import { Canvas } from '@react-three/fiber'
import Bedroom from './scenes/bedroom/Bedroom'
import { Center, OrbitControls } from '@react-three/drei'
import Lights from './scenes/lights/Lights'
import CameraRig from './scenes/camera/CameraRig'
import PostProcessing from './scenes/postproccessing/PostProcessing'
import useScene from './state/store/useScene'
import Interface from './ui/Interface/Interface'
import { useRef, Suspense } from 'react'
import LoadingPage from './ui/Loading/LoadingPage'
import LoadTracker from './scenes/utils/LoadTracker'
import { SCENE } from './config/scene'
// import { Perf } from 'r3f-perf'
import ArtGallery from './scenes/artGalerry/ArtGallery'
import ShadersInterface from './ui/Interface/ShadersInterface'
import { Leva } from 'leva'
import { TOUCH } from 'three'




  function BedroomApp() {
    
    const isAnimating = useScene(state => state.isAnimating)
    const isControls = useScene(state => state.isControls)
    
    const orbitControlRef = useRef(null)

    return (
      
        <>
          
          <LoadingPage />
          <Canvas
            shadows
          >
            <color args={ [SCENE.background] } attach={ 'background' } />
            <Suspense fallback={null}>

              <LoadTracker />
              {/* <Perf position='top-left'/> */}
              <PostProcessing />
              <OrbitControls touches={{ ONE: TOUCH.PAN, TWO: TOUCH.DOLLY_PAN }} enableRotate={false} ref={ orbitControlRef } makeDefault enabled={!isAnimating && isControls} enablePan={true}/>

              <Leva hidden />
              <Center>

              
                <Lights />
                <CameraRig orbitControlRef={orbitControlRef}/>


                <Bedroom />
 
              </Center>

                <ArtGallery />
        </Suspense>
          </Canvas>
          <Interface />
          <ShadersInterface />
        </>
    )
  }

  export default BedroomApp
