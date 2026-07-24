import { useEffect, useRef, useState } from 'react'
import useScene from '../../state/store/useScene'
import './LoadingPage.css'
import gsap from 'gsap'
import { TRANSITION } from '../../config/animation'
import { SCENE } from '../../config/scene'
import { useProgress } from '@react-three/drei'

export default function LoadingPage() {

    const pageRef = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(true)
    const { progress } = useProgress()

    const state = useScene(state => state.state)

    useEffect(() => {
        console.log(pageRef.current)
        state === 'loaded' && gsap.to(pageRef.current, {
            opacity: 0,
            duration: TRANSITION.fadeDuration,
            delay: TRANSITION.fadeDelay + 0.1,
            onComplete: () => setVisible(false)
        })
    }, [state])

    if (!visible)
        return null

    return <div ref={pageRef} className='loading-page' style={{background: SCENE.background}}>
        <img className="logo" src="/logo.png" alt="logo" />
        <div className='text'>Chargement ...</div>
        <div className='loading-bar-container'>
            <div style={{width: `${progress}%`}} className='loading-bar'/>
        </div>
    </div>
}