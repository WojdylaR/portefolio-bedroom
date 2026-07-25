import { useConfigurator } from "../store/configurator"

export default function Interface() {

    const setMaterial = useConfigurator(state => state.setMaterial)
    const setColor = useConfigurator(state => state.setColor)

    const zones = useConfigurator(state => state.zones)

    return (
        <div className="configurator">
            <div className="header border">
                <h1 className="title">
                    Configurateur
                </h1>
            </div>

            <div className="part border" >
                <h2 className="title">Serre-tête </h2>
                <div className="choices">
                    <h3 className="title">Matière</h3>
                    <div className="buttons">
                        
                        <button onClick={() => setMaterial('headbandPad', 'leather')}>Cuire</button>
                        <button onClick={() => setMaterial('headbandPad', 'brushedMetal')}>Metal</button>
                        <button onClick={() => setMaterial('headbandPad', 'softTouch')}>softTouch</button>
                    </div>
                    <h3 className="title">Couleur</h3>
                    <div className="buttons">
                        <button onClick={() => setColor('headbandPad', '#1a1a1c')}>Noir</button>
                        <button onClick={() => setColor('headbandPad', '#6b5d52')}>Taupe</button>
                        <button onClick={() => setColor('headbandPad', '#2a3642')}>Bleu</button>
                    </div>
                </div>
            </div>
            <div className="part border" >
                <h2 className="title">Coques </h2>
                <div className="choices">
                    <h3 className="title">Matière</h3>
                    <div className="buttons">
                        
                        <button onClick={() => setMaterial('earpads', 'leather')}>Cuire</button>
                        <button onClick={() => setMaterial('earpads', 'brushedMetal')}>Metal</button>
                        <button onClick={() => setMaterial('earpads', 'softTouch')}>softTouch</button>
                    </div>
                    <h3 className="title">Couleur</h3>
                    <div className="buttons">
                        <button onClick={() => setColor('earpads', '#1a1a1c')}>Noir</button>
                        <button onClick={() => setColor('earpads', '#6b5d52')}>Taupe</button>
                        <button onClick={() => setColor('earpads', '#2a3642')}>Bleu</button>
                    </div>
                </div>
            </div>
            <div className="part border" >
                <h2 className="title">Coussinets </h2>
                <div className="choices">
                    <h3 className="title">Matière</h3>
                    <div className="buttons">
                        
                        <button onClick={() => setMaterial('shells', 'leather')}>Cuire</button>
                        <button onClick={() => setMaterial('shells', 'brushedMetal')}>Metal</button>
                        <button onClick={() => setMaterial('shells', 'softTouch')}>softTouch</button>
                    </div>
                    <h3 className="title">Couleur</h3>
                    <div className="buttons">
                        <button onClick={() => setColor('shells', '#1a1a1c')}>Noir</button>
                        <button onClick={() => setColor('shells', '#6b5d52')}>Taupe</button>
                        <button onClick={() => setColor('shells', '#2a3642')}>Bleu</button>
                    </div>
                </div>
            </div>
        </div>
    )
}