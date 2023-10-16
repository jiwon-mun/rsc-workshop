import StaticServerComponent from '@/components/StaticServerComponent'
import FetchServerComponent from '@/components/FetchServerComponent'

import { Fragment, Suspense } from 'react'
import UnCachedFetchServerComponent from '@/components/UnCachedFetchServerComponent'
import DelayServerComponent from '@/components/DelayServerComponent'
import StaticClientComponent from '@/components/StaticClientComponent'
import FetchClientComponent from '@/components/FetchClientComponent'
import DateServerComponent from '@/components/DateServerComponent'
import DateClientComponent from '@/components/DateClientComponent'
import DateDynamicImportComponent from '@/components/DateDynamicImportComponent'
import ServerComponentWithImportClientComponent from '@/components/ServerComponentAtClientComponent'
import ServerComponentAtClientComponent from '@/components/ClientComponentAtServerComponent'
import FileServerComponent from '@/components/FileServerComponent'

export default function Home() {
  return (
    <Fragment>
      <StaticServerComponent />
      <FetchServerComponent />
      <UnCachedFetchServerComponent />
      <DelayServerComponent second={0} />
      
      <DelayServerComponent second={0}>
        <DelayServerComponent second={0} />
      </DelayServerComponent>
      <Suspense fallback={<Fragment />}>
        <DelayServerComponent second={3} />
      </Suspense>

      <StaticClientComponent />
      <FetchClientComponent />

      <StaticServerComponent>
        <StaticClientComponent />
      </StaticServerComponent>

      <StaticClientComponent>
        <StaticServerComponent />
      </StaticClientComponent>

      <FetchClientComponent>
        <StaticServerComponent>
          <FetchClientComponent/>
        </StaticServerComponent>
      </FetchClientComponent>

      <DateServerComponent />
      {/* <DateClientComponent /> */}
      <DateDynamicImportComponent />

      <ServerComponentWithImportClientComponent />
      <ServerComponentAtClientComponent />


      <StaticClientComponent>
        <FileServerComponent />
      </StaticClientComponent>
    </Fragment>
  )
}
