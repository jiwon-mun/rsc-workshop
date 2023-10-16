import { User } from "@/app/api/route"
import { FC, PropsWithChildren } from "react"

const UnCachedFetchServerComponent: FC<PropsWithChildren> = async ({children}) => {
    const users = await (await fetch('http://localhost:3000/api', { cache: 'no-store' })).json()
    return <div>This is UnCached Fetch Server Component
        {users.map((user: User)=> <li key={user.id}>id: {user.id} name: {user.name} age: {user.age}</li>)}
        {children ? <div style={{marginLeft: 20}}>{children}</div> : null}
    </div>
}

export default UnCachedFetchServerComponent