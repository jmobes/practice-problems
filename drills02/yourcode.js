

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

function findMode(arr){
  bubbleSort(arr);
  let len = arr.length - 1;
  let highestCount = 1;
  let mode;
  let count = 1;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i+1]) {
      count++;
      if(count > highestCount) {
        highestCount = count;
        mode = arr[i];
      }
    }
    else {
      count = 1;
    }
  }
  return mode;
}

function swap(arr,pos1,pos2) {
  let temp = arr[pos1];
  arr[pos1] = arr[pos2];
  arr[pos2] = temp;
}

function bubbleSort(arr) {
  let len = arr.length - 1;
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length; j++) {
      if(arr[j] > arr[j+1]) {
        swap(arr,j,j+1);
      }
    }
    len--;
  }
}
