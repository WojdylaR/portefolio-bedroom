import { EffectComposer, ToneMapping } from '@react-three/postprocessing'
import { ToneMappingMode } from 'postprocessing'

export default function PostProcessing () {


    return <>
    <EffectComposer enableNormalPass >
        <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
    </EffectComposer>
    </>
}