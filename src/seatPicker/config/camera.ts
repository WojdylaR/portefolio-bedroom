import { SCENE_POSITION } from "../scene/mesh/Scene"

export interface ICamera {
    position: [number, number, number]
    lookAt: [number, number, number]
}

export const cameraDefault: ICamera = {
    position: [0, 40, - 60],
    lookAt: [0, 0, 5],
}