import { useConfigurator } from "../store/configurator"
import { COLORS_BY_MATERIAL, MATERIAL_LABELS, ZONES_CONFIG, type ZoneConfig } from '../materials/definitions.type'
import { useEffect } from "react";
import gsap from "gsap";
import { TRANSITION } from "../config/animation";

const Card = ({ zone, index } : { zone: ZoneConfig, index: number}) => {

    const { title, id, materials } = zone;
    
    const setMaterial = useConfigurator(state => state.setMaterial)
    const setColor = useConfigurator(state => state.setColor)

    const zones = useConfigurator(state => state.zones)

    return ( <div className="card">
        <div className="title"><span className="index">{index + 1}</span> - {title}</div>
            <div>MATERIAL</div>
            <div className="materials">
                {materials.map(material => <button className={zones[id].material === material ? 'active button' : 'button'} key={material} onClick={() => setMaterial(id, material)}>
                    {MATERIAL_LABELS[material]}
                </button>)}
            </div>
            <div>COLOR</div>
            <div className="colors">
                {COLORS_BY_MATERIAL[zones[id].material].map(color =>
                     <button className={zones[id].color === color.hex ? 'active button' : 'button'} key={color.label} onClick={() => setColor(id, color.hex)}>
                        <div style={{background: color.hex}} className="color-circle"></div>
                        <div className="label">{color.label}</div>
                    </button>)}
            </div>
        </div>
    )
}

export default function Interface() {

    const state = useConfigurator(state => state.state)

    useEffect(() => {

        if (state === 'ready'){
            gsap.to('.configurator', {
                right: 0,
                delay: TRANSITION.fadeDuration / 2,
                duration: TRANSITION.appearDelay,
                ease: 'power2.inOut',
        })}
    }, [state])


    return (
        <div className="configurator">
            { ZONES_CONFIG.map((zone, index) => <Card key={zone.id} zone={zone} index={index}/>)}
        </div>
    )
}   