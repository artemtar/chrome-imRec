console.log("chorome extention");


chrome.runtime.onMessage.addListener(gotMessage);
var flag = 0;
function gotMessage(message, sender, sendResponse) {
    if (message.txt === "hi") {
        if (flag === 0){
            flag = 1;
        }else{
            flag = 0;
        }
    }
    if (flag === 1) {
        let paragraphs = document.getElementsByTagName("p")
        for (e of paragraphs) {
            e.style['background-color'] = '#FF00FF';
        }
    }
}