import useScene from "../../state/store/useScene"


export default function Interface() {
    const setFocus = useScene(state => state.setFocus)
    const focusReset = useScene(state => state.focusReset)
    const focus = useScene(state => state.focus)

    return (
        <div className="interface">
            <div className='buttons'>
                {focus === null
                    ? <div onClick={() => setFocus('screen')} className="button"><img src='./screenButton.png'/></div>
                    : <div onClick={focusReset} className="button"><img src='./returnButton.png'/></div>
                }
                <a href='https://www.linkedin.com/in/ronan-wojdyla-07aa3920a/' className="button">
                    <img src='./linkedinButton.png'/>
                </a>
            </div>
        </div>
    )
}