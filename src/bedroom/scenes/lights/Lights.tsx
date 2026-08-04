import PointLightLamp from './PointLightLamp'
import AmbiantLight from './AmbianthLight'
import PointLightDoor from './PointLightDoor'
import ArtGaleryLight from './ArtGaleryLight'

export default function Lights () {

    return <>
        <AmbiantLight />

        <PointLightLamp />
        <PointLightDoor />

        <ArtGaleryLight />
    </>
}