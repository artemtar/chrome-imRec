tokenizer = new natural.WordTokenizer();
// target = ["user", "have", 'jump'];
target = [];

var analizeText = function(text, toMatch){
    var tokens = tokenizer.tokenize(text)
    var cleanWords = tokens
                    .map(word => word.toLowerCase())
                    // .map(word => word.removeStopWords())
                    .filter(word => word.length > 2 && word.length < 20);
    var uniqWords = [...new Set(cleanWords)];
    var createDictToAnalize = function(target, words){
      toAnalize = []
      target.forEach(function(t){
          words.forEach(function(word){
            if (word[0] == t[0] && word[1] == t[1]){
              toAnalize.push(word);
            }
         })
      }) 
      return toAnalize;
    }
    wordsToCheck = nlp(createDictToAnalize(toMatch, uniqWords))
                                        .normalize()
                                        .out('text')
                                        .split(' ');
    targetWords = nlp(toMatch)
                        .normalize()
                        .out('text')
                        .split(' ')

    const intersection = wordsToCheck.filter(element => targetWords.includes(element))
                                     .filter(n => n);
    console.log(intersection + "intersection")
    return intersection.length;
    // foundOcurences = nlp(splited)
    //                         .nouns()
    //                         .normalize()
    //                         .match("("+toMatch.join("|")+")")
    //                         .length;
    // return foundOcurences;
}
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




// checkIfImg = function(toCheck){
//     // console.log(toCheck);

//     var backImg;
//     if (toCheck.is('img')) {
//         toCheck.addClass("blur");
//     }
//     else {
//         backImg = toCheck.css('background-image');
//         if (backImg != 'none'){
//         console.log("back");
//         toCheck.addClass("blur")
//         }
//     }
// }




// var imgs = []
// $('*').each(function(){ 
//     // console.log("hello");
//     // console.log($(this))
//     checkIfImg($(this));
// })

//     var observer = new MutationObserver(function (mutations) {
//         mutations.forEach(function (mutation) {
//             switch (mutation.type) {
//             case 'childList':
//                 Array.prototype.forEach.call(mutation.target.children, function (child) {
//                      if ( child.tagName === "IMG" ) {
//                          console.log("img");
//                      }
//                     child.addEventListener( 'load', checkIfImg, false );
//                     console.log("forEachChild");
//                     console.log(child);
//                     checkIfImg($(child));
//                     $(child).each(function(){ 
//                         console.log("inside each");
//                         console.log($(this));
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
// observer.observe(document, {childList: true, subtree: true});


// }
//     var backImg;
//     if (toCheck.is('img')) {
//         toCheck.addClass("blur");
//     }
//     else {
//         backImg = toCheck.css('background-image');
//         if (backImg != 'none'){
//         console.log("back");
//         toCheck.addClass("blur")
//         }
//     }
// }
let imageList = [];

function checkIfImg(toCheck) {
  let images = toCheck.find('img');
  for(let image of images) {
    let imageSource = $(image).attr('src');
    // $(image).addClass("noblur");
    console.log("what")
    console.log($(image));
    $(image).click(function(e) {
      var code = e.keyCode || e.which;
      if (code == 90){
    $(this).addClass("noblur");
  }

  });
    if(!imageList.includes(image)) {
      imageList.push(image);
      console.log("pushed: " + imageSource)
      console.log(imageList)
    }
  }
};

checkIfImg($(document));

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(mutation => checkIfImg($(mutation.target)));
});
observer.observe(document, { childList: true, subtree: true });

var text = $('body').text();
count = analizeText(text, target);
console.log("count " + count);
if (count == 0){
  imageList.forEach(function(element){
    console.log("inside");
    // console.log(element);
// element.addClass("noblur")
  });
}
console.log(count + " matchedc")


// content script
var lastElementContext;
document.addEventListener('contextmenu', function(event) {
    lastElementContext = event.target;
}, true);
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  console.log("here")  
  if (lastElementContext) {
      console.log("EVENT");
      $(lastElementContext).addClass("noblur");
    }
});