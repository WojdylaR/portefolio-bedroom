import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export interface IAuditoriomScene {

    state: 'idle' | 'block-focus' | 'seat-focus'
    isAnimating: boolean

    cameraPosition: [number, number, number] | null
    cameraTarget: [number, number, number] | null

    setCameraPosition: (position: [number, number, number]) => void
    setCameraTarget: (position: [number, number, number]) => void
    setAnimating: (value: boolean) => void
    setState: (string: 'idle' | 'block-focus' | 'seat-focus') => void
    resetFocus: () => void
}

export default create<IAuditoriomScene>()(subscribeWithSelector((set) => {

    return {

        state: 'idle',
        isAnimating: false,

        cameraPosition: null,
        cameraTarget: null,


        setCameraPosition: ( cameraPosition: [number, number, number] ) => {
            set( () => {
                return { cameraPosition: cameraPosition }
            })
        },

        setCameraTarget: ( cameraTarget: [number, number, number] ) => {
            set( () => {
                return { cameraTarget: cameraTarget }
            })
        },

        setAnimating: ( value: boolean ) => {
            set( () => {
                return { isAnimating: value }
            })
        },

        setState: (state) => {
            set(() => {
                return {state: state}
            })
        },

        resetFocus: () => {
            set(() => {
                return {state: 'idle', cameraPosition: null, cameraTarget: null}
            })
        }
    }
}))