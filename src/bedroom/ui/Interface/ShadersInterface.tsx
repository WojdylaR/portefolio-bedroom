import { ART_META } from "../../scenes/camera/view"
import useScene from "../../state/store/useScene"
import type { ShaderMeta } from '../../scenes/artGalerry/artGalery.type'

export default function ShadersInterface() {

    const focus = useScene(state => state.focus)

    const meta: ShaderMeta | null = focus &&  ART_META[focus] && ART_META[focus]
    
    if (!meta)
        return null

    return <div className="shaders-interface">

        <div className="meta">
            <div className="title">
                {meta.title}
            </div>
            <div className="description">
                {meta.description}
            </div>
            {meta.href && <a className="href" href={meta.href}>
                {meta.href}
            </a>}
        </div>
    </div>
}