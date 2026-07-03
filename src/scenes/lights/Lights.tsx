import PointLightLamp from './PointLightLamp'
import AmbiantLight from './AmbianthLight'
import PointLightDoor from './PointLightDoor'

export default function Lights () {

    return <>
        <AmbiantLight />

        <PointLightLamp />
        <PointLightDoor />
    </>
}