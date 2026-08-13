import { Vector3 } from "three"
import { SCENE_POSITION } from "../scene/mesh/Scene"

export interface ICamera {
    position: [number, number, number]
    lookAt: Vector3
}

export const cameraDefault: ICamera = {
    position: [15, 10, SCENE_POSITION.z * 1.5],
    lookAt: new Vector3(0, 1, 0),
}