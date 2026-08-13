import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export interface IAuditoriomScene {

    state: 'idle' | 'focus'
    isAnimating: boolean

    cameraPosition: [number, number, number] | null

    setCameraPosition: (position: [number, number, number]) => void
    setAnimating: (value: boolean) => void
    setFocus: () => void
    resetFocus: () => void
}

export default create<IAuditoriomScene>()(subscribeWithSelector((set) => {

    return {

        state: 'idle',
        isAnimating: false,
        
        cameraPosition: null,
        
        setCameraPosition: ( cameraPosition: [number, number, number] ) => {
            set( () => {
                return { cameraPosition: cameraPosition }
            })
        },
        setAnimating: ( value: boolean ) => {
            set( () => {
                return { isAnimating: value }
            })
        },

        setFocus: () => {
            set(() => {
                return {state: 'focus'}
            })
        },

        resetFocus: () => {
            set(() => {
                return {state: 'idle', cameraPosition: null}
            })
        }
    }
}))