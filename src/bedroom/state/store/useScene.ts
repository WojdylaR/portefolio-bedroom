import { create } from "zustand";
import { subscribeWithSelector } from 'zustand/middleware'

export interface IScene {

    state: 'loading' | 'loaded'

    isFirstFocus: boolean
    focus: 'idle' |  'screen'
    isAnimating: boolean
    isControls: boolean

    setLoaded: () => void
    focusScreen: () => void
    focusReset: () => void
    setIsControls: (value: boolean) => void
    setIsAnimating: (value: boolean) => void
}

export default create<IScene>()(subscribeWithSelector((set) => {

    return {

        state: 'loading',
        isFirstFocus: true,
        focus: 'idle',
        isAnimating: false,
        isControls: true,

        setLoaded: () => {
            set(() => {
                return {state: 'loaded'}
            })
        },

        focusScreen: () => {
            set(() => {
                return {focus: 'screen', isFirstFocus: false}
            })
        },

        focusReset: () => {
            set(() => {
                return {focus: 'idle', isFirstFocus: false}
            })
        },

        setIsControls: (value: boolean) => {
            set(() => {
                return {isControls: value}
            })
        },

        setIsAnimating: (value: boolean) => {
            set(() => {
                return {isAnimating: value}
            })
        },
    }
}))