import type { ShaderModule } from '../artGalery.type'

import woodVertex from '../shaders/wood/vertex.glsl'
import woodFragment from '../shaders/wood/fragment.glsl'

import wobblyVertex from '../shaders/wobblySphere/vertex.glsl'
import wobblyFragment from '../shaders/wobblySphere/fragment.glsl'

import terrainVertex from '../shaders/terrain/vertex.glsl'
import terrainFragment from '../shaders/terrain/fragment.glsl'


import leatherVertex from '../shaders/leather/vertex.glsl'
import leatherFragment from '../shaders/leather/fragment.glsl'

import brushedMetalVertex from '../shaders/brushedMetal/vertex.glsl'
import brushedMetalFragment from '../shaders/brushedMetal/fragment.glsl'

export const SHADERS = {
  wood: { id: 'wood', vertexShader: woodVertex, fragmentShader: woodFragment, meta: {
    title: 'Bois',
    description: 'Un motif de rayures sinusoïdales dessiné sur des coordonnées volontairement tordues : un bruit de Perlin fournit un angle de rotation qui varie en chaque point, et les lignes régulières deviennent des veines. Utilisé pour la finition bois du configurateur de casque.',
    href: 'https://ronan-wojdyla.dev/headphone-configurator',
  } },
  wobbly: { id: 'wobbly', vertexShader: wobblyVertex, fragmentShader: wobblyFragment, meta: {
    title: 'Sphère déformée',
      description: 'Bruit simplex 4D — trois dimensions d\'espace, une de temps — appliqué deux fois : une première passe déforme les coordonnées, une seconde déplace les sommets. Les normales sont recalculées par produit vectoriel sur deux points voisins. Exercice du cours Three.js Journey de Bruno Simon.',
      href: null,
  } },
  terrain: { id: 'terrain', vertexShader: terrainVertex, fragmentShader: terrainFragment, meta: {
    title: 'Terrain',
    description: 'Relief procédural généré par bruit simplex, la couleur des strates dérivant de l\'altitude. Exercice du cours Three.js Journey de Bruno Simon.',
    href: null,
  } },
  leather: { id: 'leather', vertexShader: leatherVertex, fragmentShader: leatherFragment, meta: {
    title: 'Cuir',
    description: 'FBM sur six octaves, élevé au carré pour resserrer le grain, puis mixé entre deux tons proches. La rugosité varie avec le grain, ce qui donne au matériau sa réponse mate à la lumière. Finition cuir du configurateur de casque.',
    href: 'https://ronan-wojdyla.dev/headphone-configurator',
  } },
  brushedMetal: { id: 'brushedMetal', vertexShader: brushedMetalVertex, fragmentShader: brushedMetalFragment, meta: {
    title: 'Métal brossé',
    description: 'Bruit de Perlin fractal (FBM) échantillonné sur une grille étirée d\'un facteur mille dans une direction : le bruit s\'écrase en fils continus. Metalness à 1, rugosité modulée par le grain pour l\'anisotropie. Finition métal du configurateur de casque.',
    href: 'https://ronan-wojdyla.dev/headphone-configurator',
  } },
} as const satisfies Record<string, ShaderModule>

export type ShaderId = keyof typeof SHADERS
