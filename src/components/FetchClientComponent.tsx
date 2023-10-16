'use client'
import { User } from "@/app/api/route"
import useQuery from "@/useQuery"
import { FC, PropsWithChildren } from "react"

const FetchClientComponent: FC<PropsWithChildren> = ({children}) => {
    const {data : users, loading} = useQuery<User[]>('http://localhost:3000/api')

    if(loading) return 'loading'
    if(!users) return 'no data'


    return <div>This is Fetch Client Component
        {users.map((user: User)=> <li key={user.id}>id: {user.id} name: {user.name} age: {user.age}</li>)}
        {children ? <div style={{marginLeft: 20}}>{children}</div> : null}
    </div>
}

export default FetchClientComponent