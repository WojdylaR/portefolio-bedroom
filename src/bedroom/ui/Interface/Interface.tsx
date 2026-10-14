import useScene from "../../state/store/useScene"


export default function Interface() {
    const setFocus = useScene(state => state.setFocus)
    const focusReset = useScene(state => state.focusReset)
    const focus = useScene(state => state.focus)

    return (
        <div className="interface">
            <div className='buttons'>
                <div onClick={() => {}} className="bigButton doorButton"><img src='./bedroom/doorButton.png'/></div>
                <div onClick={() => {}} className="bigButton"><img src='./bedroom/lampButton.png'/></div>
                <div onClick={() => {}} className="bigButton"><img src='./bedroom/neonButton.png'/></div>
                {focus === null
                    ? <div onClick={() => setFocus('screen')} className="button"><img src='./bedroom/screenButton.png'/></div>
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