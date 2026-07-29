export const MATERIAL_ID: Record<MaterialId, number> = {
  leather: 0,
  brushedMetal: 1,
  softTouch: 2,
}


export type ZoneId = 'shells' | 'earpads' | 'headbandPad'
export type MaterialId = 'leather' | 'brushedMetal' | 'softTouch'

type ColorOption = { label: string; hex: string }


export const COLORS_BY_MATERIAL: Record<MaterialId, ColorOption[]> = {
  leather: [
    { label: 'Espresso', hex: '#32221a' },
    { label: 'Oxblood', hex: '#4a1521' },
   { label: 'Warm Taupe', hex: '#6e625a' },
  ],
  brushedMetal: [
    { label: 'Silver', hex: '#c4c4c8' },
    { label: 'Gunmetal', hex: '#2b2b30' },
    { label: 'Rose Copper', hex: '#c08067' },
    { label: 'Gunmetal Blue', hex: '#3d5875' },
  ],
  softTouch: [
    { label: 'Onyx', hex: '#1c1e22' },
    { label: 'Slate', hex: '#4a4f57' },
    { label: 'Sand', hex: '#af9b7a' },
    { label: 'Forest', hex: '#3a4a3f' },
  ],
}

export const MATERIAL_LABELS: Record<MaterialId, string> = {
  leather: 'Leather',
  brushedMetal: 'Brushed metal',
  softTouch: 'Soft-touch',
}

export type ZoneConfig = {
  id: ZoneId
  title: string
  materials: MaterialId[]
}

export const ZONES_CONFIG: ZoneConfig[] = [
  { id: 'headbandPad', title: 'Headband', materials: ['softTouch', 'leather'] },
  { id: 'shells',      title: 'Ear cups',  materials: ['brushedMetal', 'softTouch'] },
  { id: 'earpads',     title: 'Ear pads',  materials: ['softTouch', 'leather'] },
]