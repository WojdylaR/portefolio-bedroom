export type CameraView = {
    position: [number, number, number]
    target: [number, number, number]
    zoom: number
    near: number
    animationDuration: number
    orbitEnabled : boolean
}

export const IDLE_VIEW: CameraView = {
    position: [20, 15, 13],
    target: [0, 0, 0],
    near: 0.1,
    zoom: 90,
    animationDuration: 2,
    orbitEnabled : true
}

export const SCREE_VIEW: CameraView = {
    position:  [1, 2.6, -15],
    target: [-1.7  , 0.13, 2.3],
    near: 15, 
    zoom: 900,
    animationDuration: 1,
    orbitEnabled : false
}