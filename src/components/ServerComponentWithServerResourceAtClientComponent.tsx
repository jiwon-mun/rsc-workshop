'use client'
import FileServerComponent from "./FileServerComponent";

const ServerComponentWithServerResourceAtClientComponent = () => {
    return <div><FileServerComponent /> <div style={{marginLeft: 20}}>At Client Component</div></div>
}

export default ServerComponentWithServerResourceAtClientComponent;