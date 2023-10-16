import dynamic from 'next/dynamic'
const ClientComponent = dynamic(() => import('./DateClientComponent'), {
  ssr: false
})
const DateDynamicImportComponent = ()=> <ClientComponent/>

export default DateDynamicImportComponent