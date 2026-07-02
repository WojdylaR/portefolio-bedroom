import { useControls } from "leva";
import OrthographicCameraComponent from "./OrthographicCameraComponent";

export default function Camera() {

    const { orthographic } = useControls('camera', {
        orthographic:  true
    })

    return <>
        {orthographic && <OrthographicCameraComponent />}
    </>
}