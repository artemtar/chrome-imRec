console.log("script is running");

chrome.browserAction.onClicked.addListener(sendMes)

function sendMes(tab) { 
    let msg = {
        txt: "hi"
    }
    chrome.tabs.sendMessage(tab.id, msg);
 }