

function countOccurences(wordArray, targetWord){
  var count = 0;
  for(var i = 0; i < wordArray.length; i++) {
    if(wordArray[i] === targetWord) {
      count++;
    }
  }
  return count;
}

function wordLengths(wordArray){
  var wordLenArray = [];
  for(var i = 0; i < wordArray.length; i++) {
    wordLenArray.push(wordArray[i].length);
  }
  return wordLenArray;
}

function getMinMaxMean(numArray){
  var minVal = numArray[0];
  var maxVal = numArray[0];
  var sum = 0;
  var average = 0;
  for(var i = 0; i < numArray.length; i++) {
    sum += numArray[i];
    if(numArray[i] < minVal) {
      minVal = numArray[i];
    }
    if(numArray[i] > maxVal) {
      maxVal = numArray[i];
    }
  }
  average = sum / numArray.length;
  return {min:minVal, max:maxVal, mean:average};
}

function findMode(numArr){
  let occurences;
}
