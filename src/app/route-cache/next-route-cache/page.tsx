import DelayServerComponent from "@/components/DelayServerComponent"
import Link from "next/link"
import { Fragment } from "react"

const RouteCachePage = () => {
    return <Fragment>
        <DelayServerComponent second={2} />
        <Link href="/route-cache">Go Previous</Link>
    </Fragment>
}

export default RouteCachePage