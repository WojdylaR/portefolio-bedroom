import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'
import { ToneMappingMode } from 'postprocessing'

export default function PostProcessing () {


    return <>
    <EffectComposer enableNormalPass >
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
        <Bloom luminanceThreshold={1.1} intensity={ 1 } mipmapBlur/>
    </EffectComposer>
    </>
}