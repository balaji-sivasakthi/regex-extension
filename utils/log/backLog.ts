const backLog  = () => {
    chrome.runtime.sendMessage("Hello",()=>{
        
    })
}
export default backLog