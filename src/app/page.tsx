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
import ServerComponentAtClientComponent from '@/components/ServerComponentAtClientComponent'
import FileServerComponent from '@/components/FileServerComponent'
import "public/RSCObserver.css";
import RequestMemoizationCacheComponent from '@/components/RequestMemoizationCacheComponent'
import FullRouteCacheComponent from '@/components/FullRouteCacheComponent'
import ObserverableCacheComponent from '@/components/ObserverableCacheComponent'
import RouteCacheComponent from '@/components/RouteCacheComponent'
import ServerComponentWithServerResourceAtClientComponent from '@/components/ServerComponentWithServerResourceAtClientComponent'
import ClientComponenAtServerComponent from '@/components/ClientComponentAtServerComponent'
import ClientComponenWithStateAtServerComponent from '@/components/ClientComponenWithStateAtServerComponent'
export default function Home() {
  return (
    <Fragment>
      
      {/* {1. 서버 컴포넌트와 클라이언트 컴포넌트는 무슨 차이가 있을까?} */}
      {/* <StaticServerComponent />
      <StaticClientComponent /> */}

      {/* {2. 데이터 패치 시에는 어떤 차이가 있을까?} */}
      {/* <FetchServerComponent />
      <FetchClientComponent /> */}
      
      {/* {3. 딜레이가 존재하는 서버 컴포넌트와 스트리밍은 무엇이 다를까} */}
      {/* <DelayServerComponent second={0} />
      <DelayServerComponent second={0}>
        <DelayServerComponent second={0} />
      </DelayServerComponent>
      <Suspense fallback={<Fragment />}>
        <DelayServerComponent second={3} />
      </Suspense> */}

      {/* {4. Hydration을 일으키는 요소 } */}
      {/* <DateServerComponent />
      <DateClientComponent />
      <DateDynamicImportComponent /> */}

      {/* {5. 부모 자식간의 서버 및 클라이언트 컴포넌트는 어떻게 동작할까} */}
      {/* <StaticServerComponent>
        <StaticClientComponent />
      </StaticServerComponent>

      <StaticClientComponent>
        <StaticServerComponent />
      </StaticClientComponent>

      <FetchClientComponent>
        <StaticServerComponent>
          <FetchClientComponent/>
        </StaticServerComponent>
      </FetchClientComponent> */}


      {/* {6. 상호간의 Import는 가능할까?} */}
      {/* <ServerComponentAtClientComponent /> */}
      {/* <ServerComponentWithServerResourceAtClientComponent /> */}
      {/* <ClientComponenAtServerComponent /> */}
      {/* <ClientComponenWithStateAtServerComponent /> */}
      {/* <StaticClientComponent>
        <FileServerComponent />
      </StaticClientComponent> */}

      {/* {7. Data Cache 캐시는 어떻게 이루어 질까} */}
      {/* <UnCachedFetchServerComponent />
      <FetchServerComponent /> */}

      {/* {8. Request Memoization 캐시는 어떻게 이루어 질까 } */}
      {/* <RequestMemoizationCacheComponent /> */}

      {/* {9. Static Full Route Cache(For Server) 캐시는 어떻게 이루어 질까 } */}
      {/* <FullRouteCacheComponent /> */}


      {/* {10. Dynamic Full Route Cache Rendering(For Server) 은 캐시에 어떤 영향을 미칠까 } */}
      {/* <ObserverableCacheComponent /> */}

      {/* {11. Router Cache 는 무엇이고 Full Route Cache와 다를까? } */}
      {/* <RouteCacheComponent /> */}

    </Fragment>
  )
}
