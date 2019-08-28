tokenizer = new natural.WordTokenizer();
// target = ["user", "have", 'jump'];
target = ["rodent", "mice", "rat"];

var analizeText = function (text, target) {
  var tokens = tokenizer.tokenize(text)
  var cleanWords = tokens
    .map(word => word.toLowerCase())
    // .map(word => word.removeStopWords())
    .filter(word => word.length > 2 && word.length < 20);
  var uniqWords = [...new Set(cleanWords)];
  var createDictToAnalize = function (target, words) {
    toAnalize = []
    target.forEach(function (t) {
      words.forEach(function (word) {
        if (word[0] == t[0] && word[1] == t[1]) {
          toAnalize.push(word);
        }
      })
    })
    // console.log(toAnalize);
    return toAnalize;
  }
  wordsToCheck = nlp(createDictToAnalize(target, uniqWords))
    .normalize()
    .out('text')
    .split(' ');
  targetWords = nlp(target)
    .normalize()
    .out('text')
    .split(' ')
  console.log("checker")
  console.log(targetWords.join(" ") + "    TOCHECK    " + wordsToCheck.join(" "))
  const intersection = wordsToCheck.filter(element => targetWords.includes(element))
    .filter(n => n);
  return intersection.length;
  // foundOcurences = nlp(splited)
  //                         .nouns()
  //                         .normalize()
  //                         .match("("+toMatch.join("|")+")")
  //                         .length;
  // return foundOcurences;
}


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
//run on images of bigger than 10x10
//analyze title
let imageList = [];

function checkIfImg(toCheck) {
  let images = toCheck.find('img');
  let tempImgList = [];
  for (let image of images) {
    let imageSource = $(image).attr('src');
    // $(image).addClass("noblur");

    if (!imageList.includes(image)) {
      imageList.push(image);
      tempImgList.push(image);
      console.log("pushed: " + imageSource)
    }
  }
  return tempImgList;
};



checkIfImg($(document));

var text = $('body').text();
countTargetWords = analizeText(text, target);
console.log("count " + countTargetWords);
if (countTargetWords == 0) {
  imageList.forEach(function (element) {
    $(element).addClass("noblur")
  });
}
console.log(countTargetWords + " matchedc")

var observer = new MutationObserver(function (mutations) {
  var newTextMutation = [];
  var newImgList = [];
  mutations.forEach(function (mutation) {
    newImgList.push(checkIfImg($(mutation.target)));
    newTextMutation.push($(mutation.target).text());
  });
  var countTargetWordsMutation = analizeText(newTextMutation.join(" "), target);
  console.log(countTargetWordsMutation + "newone")
  if (countTargetWordsMutation == 0) {
    newImgList.forEach(function (element) {
      $(element).addClass("noblur");
    });
  }
});
observer.observe(document, { childList: true, subtree: true });

var lastElementContext;
document.addEventListener('contextmenu', function (event) {
  lastElementContext = event.target;
}, true);
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (lastElementContext && message == "unblur") {
    $(lastElementContext).addClass("noblur");
  }
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message == "unblurAll") {
    imageList.forEach(function (element) {
      $(element).removeClass("blur");
      $(element).addClass("noblur");
    });
  }
});

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message == "blurAll") {
    imageList.forEach(function (element) {
      $(element).removeClass("noblur");
      $(element).addClass("blur");
    });
  }
});
