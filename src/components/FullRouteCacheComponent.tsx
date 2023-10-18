import { User } from "@/app/api/route"

// build 후에 실행한다.
const FullRouteCacheComponent = async () => {
    const users = await (await fetch('http://localhost:3000/slowquery/api', { cache: 'no-store'})).json()
    
    return <div>FullRouteCacheComponent
        {users.map((user: User)=> <li key={user.id}>id: {user.id} name: {user.name} age: {user.age}</li>)}
    </div>
}

export default FullRouteCacheComponent