import delay from "@/delay"
import { FC, PropsWithChildren } from "react"




const DelayServerComponent: FC<PropsWithChildren<{second?: number}>> = async ({second = 2, children}) => {
    await delay(second)
    return <div>
        This is Delay Server Component
        {children ? <div style={{marginLeft: 20}}>{children}</div> : null}
    </div>
}

export default DelayServerComponent