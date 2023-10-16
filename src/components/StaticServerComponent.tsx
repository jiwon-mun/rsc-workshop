import { FC, PropsWithChildren } from "react"

const StaticServerComponent : FC<PropsWithChildren> = ({children}) => {
    return <div>This is Static Server Component
        {children ? <div style={{marginLeft: 20}}>{children}</div> : null}
        </div>
}

export default StaticServerComponent