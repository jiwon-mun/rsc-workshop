'use client'

import { FC, PropsWithChildren, useEffect, useState } from "react"

const ClientComponentWithState : FC<PropsWithChildren> = ({children}) => {
    const [state, setState] =  useState('')
    useEffect(()=> {
        setState('setup!')
    },[])
    return <div> Now State is {state}
        {children ? <div style={{marginLeft: 20}}>{children}</div> : null}
    </div>
}

export default ClientComponentWithState