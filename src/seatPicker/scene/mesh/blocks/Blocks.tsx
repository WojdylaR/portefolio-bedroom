import { BLOCKS, BLOCKS_CONFIG } from "../../../config/blocks";

export default function Blocks() {

    return ( <group>

        {BLOCKS_CONFIG.map((block, index) => {
            const B = BLOCKS[block.type]

            return <B key={index} position={block.position} rotation={block.rotation} id={block.id} />
        })}

    </group>)
}