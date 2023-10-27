export const dynamic = "force-dynamic";
// 만약 full route cache를 확인하려면 주석을
// 그렇지 않다면 force-dynamic 설정을 넘겨준다.
import { Fragment } from 'react'

import FullRouteCacheComponent from '@/components/FullRouteCacheComponent'

export default function Home() {
  return (
    <Fragment>
      <FullRouteCacheComponent />
    </Fragment>
  )
}
