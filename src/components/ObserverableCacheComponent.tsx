import Link from "next/link"

// build 후에 실행한다.
// 이 때 .next/server/app/slowquery 이하에 캐시가 없는지 확인한다.
const ObserverableCacheComponent = async () => {
    
    return <div>ObserverableCacheComponent
        <div style={{marginTop:1000}}><Link prefetch={true} href="/slowquery">링크!</Link></div>
    </div>
}

export default ObserverableCacheComponent