import { create } from "zustand";
import { subscribeWithSelector } from 'zustand/middleware'

export interface IScene {

    state: 'loading' | 'loaded'

    isFirstFocus: boolean
    focus: string | null
    toggleNeon: boolean
    toggleLamp: boolean
    toggleDoor: boolean
    isAnimating: boolean
    isControls: boolean

    viewShaderInterace: boolean
    toggleViewShaderInterface: () => void

    setLoaded: () => void
    setFocus: (target: string | null) => void
    setNeon: (value: boolean) => void
    setLamp: (value: boolean) => void
    setDoor: (value: boolean) => void
    focusReset: () => void
    setIsControls: (value: boolean) => void
    setIsAnimating: (value: boolean) => void
}

export default create<IScene>()(subscribeWithSelector((set) => {

    return {

        state: 'loading',
        isFirstFocus: true,
        focus: null,

        toggleNeon: false,
        toggleLamp: true,
        toggleDoor: false,

        isAnimating: false,
        isControls: true,

        viewShaderInterace: true,

        toggleViewShaderInterface:() => {
            set((state) => {
                return {viewShaderInterace: !state.viewShaderInterace}
            })
        },

        setLoaded: () => {
            set(() => {
                return {state: 'loaded'}
            })
        },

        setFocus: (target: string | null )  => {
            set( () => {
                return {focus: target, isFirstFocus: false}
            })
        },

        setNeon: (value: boolean )  => {
            set( () => {
                return {toggleNeon: value}
            })
        },

        setLamp: (value: boolean )  => {
            set( () => {
                return {toggleLamp: value}
            })
        },

        setDoor: (value: boolean )  => {
            set( () => {
                return {toggleDoor: value}
            })
        },

        focusReset: () => {
            set(() => {
                return {focus: null, isFirstFocus: false}
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