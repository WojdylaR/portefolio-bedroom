import useScene from "../../state/store/useScene"

export default function Interface () {

    const focusScreen = useScene(state => state.focusScreen)

    return (
        <div className="interface">
            <div className="buttons">
                <div onClick={focusScreen} className="button">
                    <img src='./screenButton.png'/>
                </div>
            </div>
        </div>
    )
}