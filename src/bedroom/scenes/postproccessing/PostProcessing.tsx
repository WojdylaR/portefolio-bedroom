import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import { ToneMappingMode } from 'postprocessing'
import type { EffectComposer as EffectComposerImpl } from 'postprocessing'
import { useControls } from 'leva'
import { useFrame, useThree } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import { LayerRenderPass } from '../../utils/LayerRenderPass'
import { ART_GALLERY } from '../lights/layers'

export default function PostProcessing () {

    const { intensity, threshold, radius } = useControls('bloom', {
        intensity: { value: 1.5, min: 0, max: 5, step: 0.1 },
        threshold: { value: 1.1, min: 0, max: 2, step: 0.01 },
        radius:    { value: 0.5, min: 0, max: 1, step: 0.01 },
    })

    const composer = useRef<EffectComposerImpl>(null!)
    const { scene, camera, raycaster } = useThree()
    const pass = useMemo(() => new LayerRenderPass(scene, camera, ART_GALLERY), [scene, camera])

    useEffect(() => {
        raycaster.layers.enable(ART_GALLERY)
        return () => {
            composer.current?.removePass(pass)
            pass.dispose()
        }
    }, [pass, raycaster])

    useFrame(() => {
        const c = composer.current
        if (c && c.passes[1] !== pass) {
            c.removePass(pass)
            c.addPass(pass, 1)
        }
    }, 0)

    const { mode } = useControls('toneMapping', {
    mode: {
        value: ToneMappingMode.LINEAR,
        options: {
            'ACES Filmic': ToneMappingMode.ACES_FILMIC,
            'AgX': ToneMappingMode.AGX,
            'Neutral': ToneMappingMode.NEUTRAL,
            'Reinhard': ToneMappingMode.REINHARD,
            'Reinhard 2': ToneMappingMode.REINHARD2,
            'Reinhard 2 Adaptive': ToneMappingMode.REINHARD2_ADAPTIVE,
            'Uncharted 2': ToneMappingMode.UNCHARTED2,
            'Cineon': ToneMappingMode.CINEON,
            'Optimized Cineon': ToneMappingMode.OPTIMIZED_CINEON,
            'Linear': ToneMappingMode.LINEAR,
        },
    },
})

    return <>
        <EffectComposer ref={composer}>
            <ToneMapping mode={mode} />
            <Bloom
                resolutionScale={0.25}
                luminanceThreshold={threshold}
                intensity={intensity}
                mipmapBlur
                radius={radius}
            />
        </EffectComposer>
    </>
}