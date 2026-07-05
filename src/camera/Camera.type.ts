export type CameraView = {
    position: [number, number, number]
    zoom: number
    near: number
    animationDuration: number
    orbitEnabled : boolean
}

export const IDLE_VIEW: CameraView = {
    position: [20, 15, 13],
    near: 0.1,
    zoom: 90,
    animationDuration: 2,
    orbitEnabled : true
}

export const SCREE_VIEW: CameraView = {
    position: [15, 1.5, -28],
    near: 29, 
    zoom: 900,
    animationDuration: 1,
    orbitEnabled : false
}