import { FC, PropsWithChildren } from "react"

const delay = async (second: number) => new Promise((resolve)=>setTimeout(()=>resolve(null), second * 1000))



const DelayServerComponent: FC<PropsWithChildren<{second?: number}>> = async ({second = 2, children}) => {
    await delay(second)
    return <div>
        This is Delay Server Component
        {children ? <div style={{marginLeft: 20}}>{children}</div> : null}
    </div>
}

export default DelayServerComponent