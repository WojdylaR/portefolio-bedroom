import PointLightLamp from './PointLightLamp'
import AmbiantLight from './AmbianthLight'
import PointLightDoor from './PointLightDoor'
// import DirectionalLight from './DirectionalLight'

export default function Lights () {

    return <>
        <AmbiantLight />

        {/* <DirectionalLight /> */}

        <PointLightLamp />
        <PointLightDoor />
    </>
}