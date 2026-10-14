import SquareBlock from "../scene/mesh/blocks/SquareBlock"
import type { FC } from "react"

export const ROWS_SQUARE = 10
export const SEATS_PER_ROW_SQUARE = 15

export const SEAT_SPACING = 1 
export const ROW_DEPTH    = 1.70  
export const ROW_RISE     = 0.35 
export const STEP_HEIGHT  = 1.0 
export const OFFSET_HEIGHT = 0.1

export type BlockType = 'square-block'

export interface IBlockProps {
    position: [number, number, number]
    rotation: number
    id: string
}

export type Block = IBlockProps & {
    type: BlockType
}

export const BLOCKS: Record<BlockType, FC<IBlockProps>> = {
    'square-block': SquareBlock
}


export const BLOCKS_CONFIG: Block[] = [
    {type: 'square-block', position: [-9, 0, 0] , rotation: 0 , id:"bloc-b" },
    {type: 'square-block', position: [9, 0, 0] , rotation: 0 , id:"bloc-b" },
    {type: 'square-block', position: [-9, 4, 18] , rotation: 0 , id:"bloc-b" },
    {type: 'square-block', position: [9, 4, 18] , rotation: 0 , id:"bloc-b" },
    {type: 'square-block', position: [17.5, 0, - 11.75] , rotation: Math.PI / 2 , id:"bloc-b" },
    {type: 'square-block', position: [- 17.5, 0, -11.5] , rotation: -Math.PI / 2 , id:"bloc-b" },
    {type: 'square-block', position: [36, 4, -11.5] , rotation: Math.PI / 2 , id:"bloc-b" },
    {type: 'square-block', position: [- 36, 4, -11.5] , rotation: -Math.PI / 2 , id:"bloc-b" },
]