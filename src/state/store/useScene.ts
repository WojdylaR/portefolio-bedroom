import { create } from "zustand";
import { subscribeWithSelector } from 'zustand/middleware'

export interface IScene {


    isFirstFocus: boolean
    focus: 'idle' |  'screen'
    isAnimating: boolean
    focusScreen: () => void
    focusReset: () => void
    enableAnimating: (value: boolean) => void
}

export default create<IScene>()(subscribeWithSelector((set) => {

    return {
        
        isFirstFocus: true,
        focus: 'idle',
        isAnimating: true,

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

        enableAnimating: (value: boolean) => {
            set(() => {
                return {isAnimating: value}
            })
        },
    }
}))