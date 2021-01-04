// - changeElements: Change any element with a given class (for example "numConvert")
//   - grab their text, which will be a number in word form(ie one, three, nine)
//     - The numbers will only be from one to nine
//       - Change their text to the numeric form(1 - 9)
//         - If it doesn't understand the word, it leaves it unchanged

function changeElements(element){
  if(typeof element === "string") {
    element = element.toLowerCase
  }

  switch(element) {
    case "one":
      element = 1;
      break;
    case "two":
      element = 2;
      break;
    case "three":
      element = 3;
      break;
    case "four":
      element = 4;
      break;
    case "five":
      element = 5;
      break;
    case "six":
      element = 6;
      break;
    case "seven":
      element = 7;
      break;
    case "eight":
      element = 8;
      break;
    case "nine":
      element = 9;
      break;
    default:
      break;
  }
  return element;
}

function appendTextToElement(classElements, word){

}

function addClass(){
}

function removeElements(){

}
