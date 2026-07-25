import { useConfigurator } from "../store/configurator"

export default function Interface() {

    const setMaterial = useConfigurator(state => state.setMaterial)
    const setColor = useConfigurator(state => state.setColor)

    const zones = useConfigurator(state => state.zones)

    return (
        <div className="configurator">
            <div className="header border">
                <h1 className="title">
                    Configurator
                </h1>
            </div>

            <div className="part border" >
                <h2 className="title">Headband</h2>
                <div className="choices">
                    <h3 className="title">Material</h3>
                    <div className="buttons">
                        <button className={zones.headbandPad.material === 'leather' ? 'select' : ''} onClick={() => setMaterial('headbandPad', 'leather')}>Leather</button>
                        <button className={zones.headbandPad.material === 'brushedMetal' ? 'select' : ''} onClick={() => setMaterial('headbandPad', 'brushedMetal')}>Metal</button>
                        <button className={zones.headbandPad.material === 'softTouch' ? 'select' : ''} onClick={() => setMaterial('headbandPad', 'softTouch')}>Soft-touch</button>
                    </div>
                    <h3 className="title">Color</h3>
                    <div className="buttons">
                        <button className={zones.headbandPad.color === '#1a1a1c' ? 'select' : ''}  onClick={() => setColor('headbandPad', '#1a1a1c')}>Black</button>
                        <button className={zones.headbandPad.color === '#6b5d52' ? 'select' : ''}   onClick={() => setColor('headbandPad', '#6b5d52')}>Taupe</button>
                        <button className={zones.headbandPad.color === '#2a3642' ? 'select' : ''}   onClick={() => setColor('headbandPad', '#2a3642')}>Blue</button>
                    </div>
                </div>
            </div>  
            <div className="part border" >
                <h2 className="title">Ear cups</h2>
                <div className="choices">
                    <h3 className="title">Material</h3>
                    <div className="buttons">
                        <button className={zones.shells.material === 'leather' ? 'select' : ''} onClick={() => setMaterial('shells', 'leather')}>Leather</button>
                        <button className={zones.shells.material === 'brushedMetal' ? 'select' : ''} onClick={() => setMaterial('shells', 'brushedMetal')}>Metal</button>
                        <button className={zones.shells.material === 'softTouch' ? 'select' : ''} onClick={() => setMaterial('shells', 'softTouch')}>Soft-touch</button>
                    </div>
                    <h3 className="title">Color</h3>
                    <div className="buttons">
                        <button className={zones.shells.color === '#1a1a1c' ? 'select' : ''}  onClick={() => setColor('shells', '#1a1a1c')}>Black</button>
                        <button className={zones.shells.color === '#6b5d52' ? 'select' : ''}   onClick={() => setColor('shells', '#6b5d52')}>Taupe</button>
                        <button className={zones.shells.color === '#2a3642' ? 'select' : ''}   onClick={() => setColor('shells', '#2a3642')}>Blue</button>
                    </div>
                </div>
            </div>
            <div className="part border" >
                <h2 className="title">Ear pads</h2>
                <div className="choices">
                    <h3 className="title">Material</h3>
                    <div className="buttons">
                        <button className={zones.earpads.material === 'leather' ? 'select' : ''} onClick={() => setMaterial('earpads', 'leather')}>Leather</button>
                        <button className={zones.earpads.material === 'brushedMetal' ? 'select' : ''} onClick={() => setMaterial('earpads', 'brushedMetal')}>Metal</button>
                        <button className={zones.earpads.material === 'softTouch' ? 'select' : ''} onClick={() => setMaterial('earpads', 'softTouch')}>Soft-touch</button>
                    </div>
                    <h3 className="title">Color</h3>
                    <div className="buttons">
                        <button className={zones.earpads.color === '#1a1a1c' ? 'select' : ''}  onClick={() => setColor('earpads', '#1a1a1c')}>Black</button>
                        <button className={zones.earpads.color === '#6b5d52' ? 'select' : ''}   onClick={() => setColor('earpads', '#6b5d52')}>Taupe</button>
                        <button className={zones.earpads.color === '#2a3642' ? 'select' : ''}   onClick={() => setColor('earpads', '#2a3642')}>Blue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}   