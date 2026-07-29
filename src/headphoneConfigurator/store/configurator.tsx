import { create } from 'zustand'
import type { MaterialId, ZoneId } from '../materials/definitions.type'
import  { COLORS_BY_MATERIAL, ZONES_CONFIG } from '../materials/definitions.type'

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
    headbandPad: { material: ZONES_CONFIG[0].materials[0],      color: COLORS_BY_MATERIAL[ZONES_CONFIG[0].materials[0]][0].hex },
    shells:      {  material: ZONES_CONFIG[1].materials[0],    color: COLORS_BY_MATERIAL[ZONES_CONFIG[1].materials[0]][0].hex  },
    earpads:     {  material: ZONES_CONFIG[2].materials[0],      color: COLORS_BY_MATERIAL[ZONES_CONFIG[2].materials[0]][0].hex  },
  },
  activeZone: null,

  setMaterial: (zone, material) =>
    set((s) => {
      const currentColor = s.zones[zone].color
      const validColors = COLORS_BY_MATERIAL[material]
      const isStillValid = validColors.some(c => c.hex === currentColor)

      return {
        zones: {
          ...s.zones,
          [zone]: {
            material,
            color: isStillValid ? currentColor : validColors[0].hex,
          },
        },
      }
    }),
  setColor: (zone, color) =>
    set((s) => ({ zones: { ...s.zones, [zone]: { ...s.zones[zone], color } } })),

  setActiveZone: (zone) => set({ activeZone: zone }),
}))