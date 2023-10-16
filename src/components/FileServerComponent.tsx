import fs from 'fs'

const FileServerComponent = () => {
    const {greeting} = JSON.parse(fs.readFileSync('db').toString())
    return <div>This is FileServerComponent <li style={{marginLeft: 20}}>{greeting}</li></div>
}

export default FileServerComponent