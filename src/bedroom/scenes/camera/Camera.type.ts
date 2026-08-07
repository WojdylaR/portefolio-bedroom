export type CameraView = {
    position: [number, number, number]
    target: [number, number, number]
    near: number
    animationDuration: number
    orbitEnabled : boolean
    width: number
    height: number
}

export type ViewRegistry = Record<string, CameraView>