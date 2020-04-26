

function getPath(path){
  return path.split("/");
}

function getPathParts(urlString){
  let stringArr = urlString.split(":");
  let protocol = stringArr[0];
  let host = stringArr[1].slice(2);
  let port = stringArr[2].slice(0, stringArr[2].indexOf("/"));

  let index;
  for(let i = 0; i < stringArr[2].length; i++) {
    if(stringArr[2][i] === "/") {
      index = i;
    }
  }
  let path = stringArr[2].slice(stringArr[2].indexOf("/") + 1, index);
  let file = stringArr[2].slice(index + 1);
  const parts = {
    protocol: protocol,
    host: host,
    port: parseInt(port),
    path: path,
    file: file
  }
  return parts;
}

// - getCapitalCount: given an array of words, return a count of how many start with capital letters, For
//   - example: ['it', 'will', 'not', 'Be', 'long', 'Till', 'we', 'Are']
//     - returns: 3
function getCapitalCount(wordArr){
  let count = 0;
  for(let i = 0; i < wordArr.length; i++) {
    if(wordArr[i][0] === wordArr[i][0].toUpperCase()) {
      count++;
    }
  }
  return count;
}

function correctCalcChecker(){

}

function doMath(){

}
