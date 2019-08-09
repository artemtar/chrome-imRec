console.log("helloooooooooooooo")
// var text = $('body').text()
// console.log(text)
console.log("another one \n\n\n\n");
console.log(document.textContent)

function collectTextNodes(element, texts) {
    for (var child = element.firstChild; child!==null; child= child.nextSibling) {
        if (child.nodeType===3)
            texts.push(child);
        else if (child.nodeType===1)
            collectTextNodes(child, texts);
    }
}
function getTextWithSpaces(element) {
    var texts= [];
    collectTextNodes(element, texts);
    for (var i= texts.length; i-->0;)
        texts[i]= texts[i].data;
    return texts.join(' ');
}

console.log(getTextWithSpaces($('body')));