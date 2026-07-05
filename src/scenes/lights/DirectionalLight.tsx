
// import { useHelper  } from "@react-three/drei"
// import * as THREE from 'three'
import { useRef } from 'react'
import { useControls } from "leva"

export default function DirectionalLight () {

    
    const directionalLight = useRef(null)


    // useHelper(directionalLight, THREE.DirectionalLightHelper, 1)

    const { position } = useControls('directionalLight', {

        position: {
            value: {
                x: 0, y: 0, z: 0
            },
            step: 0.1
        }
    })

    return <directionalLight
        ref={directionalLight}
        position={ [position.x, position.y, position.z]}

        castShadow 
            intensity={ 4 } 
            shadow-mapSize={ [128, 128] }
            shadow-camera-near={ 1 }
            shadow-camera-far={ 10 }
            shadow-camera-top={ 50 }
            shadow-camera-right={ 50 }
            shadow-camera-bottom={ -50 }
            shadow-camera-left={ -50 }

    />
}