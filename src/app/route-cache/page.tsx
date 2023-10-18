import DelayServerComponent from "@/components/DelayServerComponent"
import Link from "next/link"
import { Fragment } from "react"

const RouteCachePage = () => {
    return <Fragment>
        <DelayServerComponent second={4} />
        <Link href="route-cache/next-route-cache">GO Next</Link>
    </Fragment>
}

export default RouteCachePage