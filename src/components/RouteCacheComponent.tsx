import Link from "next/link"

// 왔다 갔다 하면서 Layout과 Page의 딜레이를 변화주며 실행해보세요.
const RouteCacheComponent = () => {
    return <div>
        This is RouteCacheComponent
        <div>
            <Link href="/route-cache">Go Test Page</Link>
        </div>
    </div>
}

export default RouteCacheComponent