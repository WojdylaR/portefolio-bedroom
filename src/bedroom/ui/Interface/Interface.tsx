import useScene from "../../state/store/useScene"


export default function Interface() {

    const setFocus = useScene(state => state.setFocus)
    const focusReset = useScene(state => state.focusReset)
    const setNeon = useScene(state => state.setNeon)
    const setDoor = useScene(state => state.setDoor)
    const setLamp = useScene(state => state.setLamp)
    
    const toggleNeon= useScene(state => state.toggleNeon)
    const toggleLamp = useScene(state => state.toggleLamp)
    const toggleDoor = useScene(state => state.toggleDoor)
    const focus = useScene(state => state.focus)
    const isAnimating = useScene(state => state.isAnimating)

    return (
        <div className="interface">
            <div className='buttons'>
                <div onClick={() => setDoor(!toggleDoor)} className="bigButton doorButton"><img src='./bedroom/doorButton.png'/></div>
                <div onClick={() => setLamp(!toggleLamp)} className="bigButton"><img src='./bedroom/lampButton.png'/></div>
                <div onClick={() => setNeon(!toggleNeon)} className="bigButton"><img src='./bedroom/neonButton.png'/></div>
                {focus === null
                    ? <div onClick={() => {
                        if (isAnimating) return
                        setFocus(focus === null ? 'screen' : null)
                        }} className="button">
                        <div><img src='./bedroom/screenButton.png'/></div>
                        <div className={'label'}>Projects</div>
                    </div>
                    : <div onClick={focusReset} className="button"><img src='./bedroom/returnButton.png'/></div>
                }

                <div className="separator" />

                <a href='https://www.linkedin.com/in/ronan-wojdyla-07aa3920a/' className="button">
                    <img src='./bedroom/linkedinButton.png'/>
                </a>
            </div>
        </div>
    )
}