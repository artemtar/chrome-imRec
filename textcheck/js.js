tokenizer = new natural.WordTokenizer();

var analizeText = function(text, toMatch){
    // var splited = text.split(" ")
    //                         .filter(word => word.length > 1 && word.length < 20)
    //                         .map(word => word.trim());
    var tokens = tokenizer.tokenize(text)
    var clean = tokens
                    .filter(word => word.length > 1 && word.length < 20)
                    .map(word => word.removeStopWords());
    console.log(clean);
    out = 0;
    // splited.forEach(function(e){
    //     if (toMatch.includes(nlp(e).normalize().out('text'))){
    //         out += 1;
    //     }
    // })
    return out;
    // foundOcurences = nlp(splited)
    //                         .nouns()
    //                         .normalize()
    //                         .match("("+toMatch.join("|")+")")
    //                         .length;
    // return foundOcurences;
}

console.log("helloooooooooooooo");
var text = $('body').text();
toMatch = ["user", "have"];
count = analizeText(text, toMatch);
console.log(count + " matchedc")
var result = tokenizer.tokenize(text)
console.log(result);
// var doc = nlp(text);
// var nouns = doc
//                 // .normalize()
//             //    .nouns()
//                .match("("+toMatch.join("|")+")")
//                .length;
// console.log(nouns);

// var images = [];
// $("img").each(function(){
//     if(this.src){images.push(this);}
// });
// console.log(images)
checkIfImg = function(toCheck){
    // console.log(toCheck);

    var backImg;
    if (toCheck.is('img')) {
        toCheck.addClass("blur");
    }

    else {
        backImg = toCheck.css('background-image');
        if (backImg != 'none'){
        console.log("back");
        toCheck.addClass("blur")
        }
    }
}

var imgs = []
$('*').each(function(){ 
    // console.log("hello");
    // console.log($(this))
    checkIfImg($(this));
})
// function collectTextNodes(element, texts) {
//     for (var child = element.firstChild; child!==null; child= child.nextSibling) {
//         if (child.nodeType===3)
//             texts.push(child);
//         else if (child.nodeType===1)
//             collectTextNodes(child, texts);
//     }
// }
// function getTextWithSpaces(element) {
//     var texts= [];
//     collectTextNodes(element, texts);
//     for (var i= texts.length; i-->0;)
//         texts[i]= texts[i].data;
//     return texts.join(' ');
// }

// console.log(getTextWithSpaces($('body')));

// DOMSubtreeModified

// var insertedNodes = [];
            // child.style.color = '#c00';
// document.addEventListener("DOMNodeInserted", function(e) {
//   var node = e.target;
//   node.css({ color : '#c00' });
//   console.log(node);
// }, false);
// var body = document.getElementsByTagName('body')
// body.addEventListener("DOMSubtreeModified", function(e) {
//   var node = e.target;
//   node.css({ color : '#c00' });
//   console.log(node);
// }, false);

// var observer = new MutationObserver(function(mutationList) {
//     for (var mutation of mutationList) {
//         for (var child of mutation.addedNodes) {
//             console.log("hidooc");
//             console.log(child);
//             $(child).each(function(){ 
//                 console.log("child");
//                 console.log($(this))
//                 checkIfImg($(this));
//             })
//         }
//     }
// });





// var c = function(e){
//     if (e){
//     checkIfImg($(e));
// }}
//     var observer = new MutationObserver(function (mutations) {
//         mutations.forEach(function (mutation) {
//             switch (mutation.type) {
//             case 'childList':
//                 Array.prototype.forEach.call(mutation.target.children, function (child) {
//                     console.log("why");
//                      if ( child.tagName === "IMG" ) {
//                          console.log("img");
//                      }
//                     child.addEventListener( 'load', c, false );
//                     // console.log(child);
//                     // checkIfImg($(child));
//                     $(child).each(function(){ 
//                         console.log("helloha");
//                         console.log($(this))
//                         if ($(this).tagName == "IMG"){
//                             console.log("img");
//                         }
//                         checkIfImg($(this));
//                     })
//                 });

//                 break;
//             default:
//             }
//         });
//     });
// observer.observe(document, {childList: true, subtree: true
//     });