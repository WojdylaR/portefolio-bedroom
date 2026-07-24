import { create } from 'zustand'

export type ZoneId = 'shells' | 'earpads' | 'headbandPad'
export type MaterialId = 'leather' | 'brushedMetal' | 'softTouch'

type ZoneConfig = {
  material: MaterialId
  color: string
}

type ConfiguratorState = {
  zones: Record<ZoneId, ZoneConfig>
  activeZone: ZoneId | null

  setMaterial: (zone: ZoneId, material: MaterialId) => void
  setColor: (zone: ZoneId, color: string) => void
  setActiveZone: (zone: ZoneId | null) => void
}

export const useConfigurator = create<ConfiguratorState>((set) => ({
  zones: {
    shells:      { material: 'softTouch',    color: '#1a1a1a' },
    earpads:     { material: 'leather',      color: '#1a1a1a' },
    headbandPad: { material: 'leather',      color: '#1a1a1a' },
  },
  activeZone: null,

  setMaterial: (zone, material) =>
    set((s) => ({ zones: { ...s.zones, [zone]: { ...s.zones[zone], material } } })),

  setColor: (zone, color) =>
    set((s) => ({ zones: { ...s.zones, [zone]: { ...s.zones[zone], color } } })),

  setActiveZone: (zone) => set({ activeZone: zone }),
}))