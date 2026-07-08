import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import { ToneMappingMode } from 'postprocessing'
import { useControls } from 'leva'

export default function PostProcessing () {

    const { intensity, threshold, radius } = useControls('bloom', {
    intensity: { value: 1.5, min: 0, max: 5, step: 0.1 },
    threshold: { value: 1.1, min: 0, max: 2, step: 0.01 }, // luminanceThreshold
    radius:    { value: 0.5, min: 0, max: 1, step: 0.01 }, // mipmapBlurRadius
  })


    return <>
        <EffectComposer>
            <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
            <Bloom
                luminanceThreshold={threshold}
                intensity={intensity}
                mipmapBlur
                radius={radius}
            />
        </EffectComposer>
    </>
}