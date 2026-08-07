import type { CameraView } from "./Camera.type"
import { GALLERY_TRANSFORM, FLAT_TILES } from "../artGalerry/config/layout"
import { SIZEMODULE } from "../artGalerry/module/moduleConstructor"
import type { TileProps } from "../artGalerry/artGalery.type"
import * as THREE from 'three'

export const MULTIPLYSCALAR = 30

export const IDLE_VIEW: CameraView = {
    position: [20, 15, 13],
    target: [0, 0, 0],
    near: 0.1,
    animationDuration: 2,
    orbitEnabled: true,
    width: 12,
    height: 8,
}

export const SCREE_VIEW: CameraView = {
    position: [1.6, 2.7, -15],
    target: [-1.7, 0.13, 2.3],
    near: 15,
    animationDuration: 1,
    orbitEnabled: false,
    width: 1.3,
    height: 0.8,
}

export const ART_SIZE: Record<string, [number, number]> = {
    'wall-frame': [1.6, 2.5],
}

export const FRAME_OFFSET: Record<string, [number, number, number]> = {
    'wall-frame': [0, 2.55, -SIZEMODULE / 2 + 0.3],
}

const AXIS_Y = new THREE.Vector3(0, 1, 0)

function viewConstructor() {

    const tiles = FLAT_TILES.filter(tile => tile.id)

    function buildView(tile: TileProps): CameraView {

        const target = new THREE.Vector3(...FRAME_OFFSET['wall-frame'])
            .applyAxisAngle(AXIS_Y, tile.rotation)
            .add(new THREE.Vector3(...tile.position))
            .applyAxisAngle(AXIS_Y, GALLERY_TRANSFORM.rotationY)
            .add(new THREE.Vector3(...GALLERY_TRANSFORM.position))

        const position = target.clone().add(
            new THREE.Vector3(0, 0, 1)
                .applyAxisAngle(AXIS_Y, tile.rotation)
                .applyAxisAngle(AXIS_Y, GALLERY_TRANSFORM.rotationY)
                .multiplyScalar(MULTIPLYSCALAR)
        )

        const [width, height] = ART_SIZE['wall-frame']

        return {
            position: position.toArray() as [number, number, number],
            target: target.toArray() as [number, number, number],
            near: MULTIPLYSCALAR - 1.5,
            animationDuration: 2,
            orbitEnabled: false,
            width,
            height,
        }
    }

    return Object.fromEntries(tiles.map(tile => [tile.id, buildView(tile)]))
}

export const VIEW: Record<string, CameraView> = {
    ...viewConstructor(),
    screen: SCREE_VIEW,
}