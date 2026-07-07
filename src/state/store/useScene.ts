import { create } from "zustand";
import { subscribeWithSelector } from 'zustand/middleware'

export interface IScene {


    isFirstFocus: boolean
    focus: 'idle' |  'screen'
    isAnimating: boolean
    isControls: boolean

    focusScreen: () => void
    focusReset: () => void
    setIsControls: (value: boolean) => void
    setIsAnimating: (value: boolean) => void
}

export default create<IScene>()(subscribeWithSelector((set) => {

    return {
        
        isFirstFocus: true,
        focus: 'idle',
        isAnimating: false,
        isControls: true,

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