import {useRegisterEvents} from '@react-sigma/core'
import { useEffect } from 'react'

export default function GraphEvents({setTarget}) {
    const handleOnClick = (e) => {
        e.preventSigmaDefault()
        console.log(e)
        setTarget(Number(e.node))
    }
    const regesterEvents = useRegisterEvents()
    useEffect(() => {
        regesterEvents({
            clickNode: handleOnClick
        })
    },[])

    return null
}