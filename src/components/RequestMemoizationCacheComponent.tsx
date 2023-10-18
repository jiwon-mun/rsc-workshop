
import { User } from "@/app/api/route"

// .next 파일을 일괄 삭제하고 진행하세요.
// 그리고 그 다음 cache: no-store 옵션을 추가하고 진행하세요.
const getUsers = async () => {
    const users = await (await fetch('http://localhost:3000/api')).json()
    return users
}

const RequestMemoizationCacheComponent = async () => {
    const users = await getUsers()
    return <div>Request Memoization Cache Component
        <DepthOne />
        {users.map((user: User)=> <li key={user.id}>id: {user.id} name: {user.name} age: {user.age}</li>)}
    </div>
}

const DepthOne = async () => {
    const users = await getUsers()
    return <div>DepthOne
        <DepthTwo />
            {users.map((user: User)=> <li key={user.id}>id: {user.id} name: {user.name} age: {user.age}</li>)}
            
    </div>
}

const DepthTwo = async () => {
    const users = await getUsers()
    return <div>DepthTwo
            {users.map((user: User)=> <li key={user.id}>id: {user.id} name: {user.name} age: {user.age}</li>)}
    </div>
}

export default RequestMemoizationCacheComponent