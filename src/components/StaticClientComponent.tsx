'use client'
import { FC, PropsWithChildren } from "react"

const StaticClientComponent : FC<PropsWithChildren> = ({children}) => {
    return <div>This is Static Client Component
        {children ? <div style={{marginLeft: 20}}>{children}</div> : null}
    </div>
}

export default StaticClientComponent