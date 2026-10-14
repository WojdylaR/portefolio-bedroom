import { RenderPass } from 'postprocessing'
import * as THREE from 'three'

export class LayerRenderPass extends RenderPass {
    private scn: THREE.Scene
    private cam: THREE.Camera
    private layer: number

    constructor(scene: THREE.Scene, camera: THREE.Camera, layer: number) {
        super(scene, camera)
        this.scn = scene
        this.cam = camera
        this.layer = layer
        this.clearPass.enabled = false
    }

    render(...args: Parameters<RenderPass['render']>) {
        const renderer = args[0]
        const autoClear = renderer.autoClear
        const mask = this.cam.layers.mask
        const bg = this.scn.background

        renderer.autoClear = false
        this.scn.background = null
        this.cam.layers.set(this.layer)

        super.render(...args)

        renderer.autoClear = autoClear
        this.cam.layers.mask = mask
        this.scn.background = bg
    }
}