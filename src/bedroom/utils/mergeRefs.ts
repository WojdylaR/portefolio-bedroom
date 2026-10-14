// utils/mergeRefs.ts
import type { Ref, RefCallback } from 'react'

export function mergeRefs<T>(...refs: (Ref<T> | undefined)[]): RefCallback<T> {
    return (value) => {
        refs.forEach((ref) => {
            if (typeof ref === 'function') ref(value)
            else if (ref) (ref as React.MutableRefObject<T | null>).current = value
        })
    }
}