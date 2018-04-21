//sender side
chrome.runtime.onMessage.addListener(function(response, sender, sendResponse){
    alert(response);
});
//reciving side
chrome.runtime.sendMessage("Send from background")