import { useGLTF } from "@react-three/drei"
import * as THREE from 'three'
import { type GLTF } from 'three-stdlib'

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

  return (
    <group dispose={null}>
      <mesh
        name="bolts_L"
        castShadow
        receiveShadow
        geometry={nodes.bolts_L.geometry}
        material={nodes.bolts_L.material}
      />
      <mesh
        name="bolts_R"
        castShadow
        receiveShadow
        geometry={nodes.bolts_R.geometry}
        material={nodes.bolts_R.material}
      />
      <mesh
        name="cup_L"
        castShadow
        receiveShadow
        geometry={nodes.cup_L.geometry}
        material={nodes.cup_L.material}
      />
      <mesh
        name="cup_R"
        castShadow
        receiveShadow
        geometry={nodes.cup_R.geometry}
        material={nodes.cup_R.material}
      />
      <mesh
        name="cushion_L"
        castShadow
        receiveShadow
        geometry={nodes.cushion_L.geometry}
        material={nodes.cushion_L.material}
      />
      <mesh
        name="cushion_R"
        castShadow
        receiveShadow
        geometry={nodes.cushion_R.geometry}
        material={nodes.cushion_R.material}
      />
      <mesh
        name="frame_L"
        castShadow
        receiveShadow
        geometry={nodes.frame_L.geometry}
        material={nodes.frame_L.material}
      />
      <mesh
        name="frame_R"
        castShadow
        receiveShadow
        geometry={nodes.frame_R.geometry}
        material={nodes.frame_R.material}
      />
      <mesh
        name="grille_L"
        castShadow
        receiveShadow
        geometry={nodes.grille_L.geometry}
        material={nodes.grille_L.material}
      />
      <mesh
        name="grille_R"
        castShadow
        receiveShadow
        geometry={nodes.grille_R.geometry}
        material={nodes.grille_R.material}
      />
      <mesh
        name="headband_pad"
        castShadow
        receiveShadow
        geometry={nodes.headband_pad.geometry}
        material={nodes.headband_pad.material}
      />
      <mesh
        name="stitching"
        castShadow
        receiveShadow
        geometry={nodes.stitching.geometry}
        material={nodes.stitching.material}
      />
      <mesh
        name="trim_L"
        castShadow
        receiveShadow
        geometry={nodes.trim_L.geometry}
        material={nodes.trim_L.material}
      />
      <mesh
        name="trim_R"
        castShadow
        receiveShadow
        geometry={nodes.trim_R.geometry}
        material={nodes.trim_R.material}
      />
    </group>
  )
}