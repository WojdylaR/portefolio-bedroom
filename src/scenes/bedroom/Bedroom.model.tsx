import { useGLTF } from "@react-three/drei"

export default function BedroomModel() {

    const bedroom = useGLTF('./bedroom.glb')

    return <primitive object={bedroom.scene} />
}