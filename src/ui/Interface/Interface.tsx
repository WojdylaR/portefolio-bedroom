import useScene from "../../state/store/useScene"

export default function Interface () {

    const focusScreen = useScene(state => state.focusScreen)
    const focusReset = useScene(state => state.focusReset)
    const focus = useScene(state => state.focus)

    return (
        <div className="interface">
            {focus === 'idle' ? <>
                <div onClick={focusScreen} className="button">
                    <img src='./screenButton.png'/>
                </div>
            </>
            : 
            <>
                <div onClick={focusReset} className="button">
                    <img src='./returnButton.png'/>
                </div>
            </>
            }
            <a href='https://www.linkedin.com/in/ronan-wojdyla-07aa3920a/' className="button">
                    <img src='./linkedinButton.png'/>
                </a>
        </div>
    )
}