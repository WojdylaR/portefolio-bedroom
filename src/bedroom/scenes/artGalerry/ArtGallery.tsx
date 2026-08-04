import { TILES, type Tile } from './artGalery.type'
import moduleConstructor from './module/moduleConstructor'
import { CELLS } from './config/layout'

export default function ArtGallery () {

    const tiles: Tile[] = CELLS.flatMap(moduleConstructor)


    return ( <group position={[2.85, -2.3,  - 6.7] } rotation-y={ Math.PI / 2}>
        
                {tiles.map((module, index) => {

                    const M = TILES[module.type]

                    return <M key={index} position={ module.position } rotation={ module.rotation } art={ module.art } />

                })}
        </group>
    )
}
