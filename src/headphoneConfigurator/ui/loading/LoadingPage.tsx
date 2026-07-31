import { useEffect, useRef, useState } from 'react'
import { useConfigurator } from '../../store/configurator'
import './LoadingPage.css'
import gsap from 'gsap'
import { TRANSITION } from '../../config/animation'
import { useProgress } from '@react-three/drei'

export default function LoadingPage() {

    const pageRef = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(true)
    const { progress } = useProgress()

    const state = useConfigurator(state => state.state)

    useEffect(() => {
        console.log(pageRef.current)
        state === 'ready' && gsap.to(pageRef.current, {
            opacity: 0,
            duration: TRANSITION.fadeDuration,
            delay: TRANSITION.fadeDelay + 0.1,
            onComplete: () => setVisible(false)
        })
    }, [state])

    if (!visible)
        return null

    return <div ref={pageRef} className='loading-page'>
        <img className="logo" src="/headphone/headphoneLogo.webp" alt="logo" />
        <div className='text'>Chargement ...</div>
        <div className='loading-bar-container'>
            <div style={{width: `${progress}%`}} className='loading-bar'/>
        </div>
    </div>
}