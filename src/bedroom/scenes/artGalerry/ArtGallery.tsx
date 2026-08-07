import { TILES } from './artGalery.type'
import { FLAT_TILES, GALLERY_TRANSFORM } from './config/layout'


export default function ArtGallery () {

    return ( <group position={ GALLERY_TRANSFORM.position } rotation-y={ GALLERY_TRANSFORM.rotationY }>
        
                {FLAT_TILES.map((module, index) => {

                    const M = TILES[module.type]

                    return <M key={index} position={ module.position } rotation={ module.rotation } art={ module.art } id={module.id} />

                })}
        </group>
    )
}
