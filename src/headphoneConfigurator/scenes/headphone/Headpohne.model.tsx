import { useGLTF } from "@react-three/drei"
import * as THREE from 'three'
import { type GLTF } from 'three-stdlib'
import HeadphoneMaterials from "../../shaders/HeadphoneMaterials"
import { useConfigurator } from "../../store/configurator"

type GLTFResult = GLTF & {
  nodes: {
    bolts_L: THREE.Mesh
    bolts_R: THREE.Mesh
    cup_L: THREE.Mesh
    cup_R: THREE.Mesh
    cushion_L: THREE.Mesh
    cushion_R: THREE.Mesh
    frame_L: THREE.Mesh
    frame_R: THREE.Mesh
    grille_L: THREE.Mesh
    grille_R: THREE.Mesh
    headband_pad: THREE.Mesh
    stitching: THREE.Mesh
    trim_L: THREE.Mesh
    trim_R: THREE.Mesh
  }
}


export default function HeadphoneModel () {

  const { nodes } = useGLTF('/headphone/headphone.glb') as unknown as GLTFResult

  const zones = useConfigurator(state => state.zones)

  return (
    <group dispose={null}>
      <mesh
        name="bolts_L"
        castShadow
        receiveShadow
        geometry={nodes.bolts_L.geometry}
      >
          <meshStandardMaterial color="#8a8a90" roughness={0.4} metalness={1} />
      </mesh>
      <mesh
        name="bolts_R"
        castShadow
        receiveShadow
        geometry={nodes.bolts_R.geometry}
      >
          <meshStandardMaterial color="#8a8a90" roughness={0.4} metalness={1} />
      </mesh>
      <mesh
        name="cup_L"
        castShadow
        receiveShadow
        geometry={nodes.cup_L.geometry}
      >
          <HeadphoneMaterials material={zones.earpads.material} color={zones.earpads.color}/>
      </mesh>
      <mesh
        name="cup_R"
        castShadow
        receiveShadow
        geometry={nodes.cup_R.geometry}
      >
          <HeadphoneMaterials material={zones.earpads.material} color={zones.earpads.color}/> 
      </mesh>
      <mesh
        name="cushion_L"
        castShadow
        receiveShadow
        geometry={nodes.cushion_L.geometry}
      >
          <HeadphoneMaterials material={zones.shells.material} color={zones.shells.color}/> 
      </mesh>
      <mesh
        name="cushion_R"
        castShadow
        receiveShadow
        geometry={nodes.cushion_R.geometry}
      >
          <HeadphoneMaterials material={zones.shells.material} color={zones.shells.color}/> 
      </mesh>
      <mesh
        name="frame_L"
        castShadow
        receiveShadow
        geometry={nodes.frame_L.geometry}
      >
          <meshStandardMaterial color="#c0c0c4" roughness={0.45} metalness={1} />
      </mesh>
      <mesh
        name="frame_R"
        castShadow
        receiveShadow
        geometry={nodes.frame_R.geometry}
      >
          <meshStandardMaterial color="#c0c0c4" roughness={0.45} metalness={1} />
      </mesh>
      <mesh
        name="grille_L"
        castShadow
        receiveShadow
        geometry={nodes.grille_L.geometry}
      >
          <meshStandardMaterial color="#0f0f11" roughness={0.95} metalness={0} />
      </mesh>
      <mesh
        name="grille_R"
        castShadow
        receiveShadow
        geometry={nodes.grille_R.geometry}
      >
          <meshStandardMaterial color="#0f0f11" roughness={0.95} metalness={0} />
      </mesh>
      <mesh
        name="headband_pad"
        castShadow
        receiveShadow
        geometry={nodes.headband_pad.geometry}
      >
        
          <HeadphoneMaterials material={zones.headbandPad.material} color={zones.headbandPad.color}/> 
      </mesh>
      <mesh
        name="stitching"
        castShadow
        receiveShadow
        geometry={nodes.stitching.geometry}
      >
          <meshStandardMaterial color="#8a8a90" roughness={0.4} metalness={1} />
      </mesh>
      <mesh
        name="trim_L"
        castShadow
        receiveShadow
        geometry={nodes.trim_L.geometry}
      >
          <meshStandardMaterial color="#1e1e1e" roughness={0.25} metalness={0} />
      </mesh>
      <mesh
        name="trim_R"
        castShadow
        receiveShadow
        geometry={nodes.trim_R.geometry}
      >
          <meshStandardMaterial color="#1e1e1e" roughness={0.25} metalness={0} />
      </mesh>
    </group>
  )
}