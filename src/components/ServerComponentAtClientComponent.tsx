'use client'
import FetchServerComponent from "./FetchServerComponent"

const ServerComponentAtClientComponent = () => {
    return <div><FetchServerComponent /> <div style={{marginLeft: 20}}>At Client Component</div></div>
}

export default ServerComponentAtClientComponent;