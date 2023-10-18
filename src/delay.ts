const delay = async (second: number) => new Promise((resolve)=>setTimeout(()=>resolve(null), second * 1000))

export default delay