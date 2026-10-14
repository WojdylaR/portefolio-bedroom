import useLayers from '../../utils/useLayers'
import { ART_GALLERY } from '../lights/layers'
import { TILES } from './artGalery.type'
import { FLAT_TILES, GALLERY_TRANSFORM } from './config/layout'
import * as THREE from 'three'


export default function ArtGallery () {

    const group = useLayers<THREE.Mesh>(ART_GALLERY)

    return ( <group ref={ group } position={ GALLERY_TRANSFORM.position } rotation-y={ GALLERY_TRANSFORM.rotationY }>
        
                {FLAT_TILES.map((module, index) => {

                    const M = TILES[module.type]

                    return <M key={index} position={ module.position } rotation={ module.rotation } art={ module.art } id={module.id} />

                })}
        </group>
    )
}
