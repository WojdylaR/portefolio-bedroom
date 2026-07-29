export const MATERIAL_ID: Record<MaterialId, number> = {
  leather: 0,
  brushedMetal: 1,
  softTouch: 2,
}


export type ZoneId = 'shells' | 'earpads' | 'headbandPad'
export type MaterialId = 'leather' | 'brushedMetal' | 'softTouch'

type ColorOption = { label: string; hex: string }


export const COLORS_BY_MATERIAL: Record<MaterialId, ColorOption[]> = {
  leather:      [{ label: 'Black', hex: '#1a1a1c' }, { label: 'Taupe', hex: '#6b5d52' }],
  brushedMetal: [{ label: 'Silver', hex: '#c4c4c8' }, { label: 'Gunmetal', hex: '#3a3a3d' }],
  softTouch:    [{ label: 'Black', hex: '#1a1a1c' }, { label: 'Blue', hex: '#2a3642' }],
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
  { id: 'headbandPad', title: 'Headband', materials: ['leather', 'softTouch'] },
  { id: 'shells',      title: 'Ear cups',  materials: ['brushedMetal', 'softTouch'] },
  { id: 'earpads',     title: 'Ear pads',  materials: ['leather', 'softTouch'] },
]