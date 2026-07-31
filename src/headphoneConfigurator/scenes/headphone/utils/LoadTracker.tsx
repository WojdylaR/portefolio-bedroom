import { useConfigurator } from '../../../store/configurator'
import { useProgress } from '@react-three/drei'
import { useEffect } from 'react'

export default function LoadTracker() {


    const { active } = useProgress()
    const setLoaded = useConfigurator(state => state.setLoaded)
    
    useEffect(() => {
        if (!active) {
            setLoaded()
        }
    }, [active, setLoaded])

        
    return null
}
