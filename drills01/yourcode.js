
function sumArray(numArr){
  var sum = 0;
  for(var i = 0; i < numArr.length; i++) {
    if(isNaN(numArr[i])) {
      return false;
    }
    sum += numArr[i];
  }
  return sum;
}

function fitWithinVal(numArray, targetNum){
  var sum = 0;
  var validNums = [];
  if(isNaN(targetNum)) {
    return false;
  }
  for(var i = 0; i < numArray.length; i++) {
    if(isNaN(numArray[i])) {
      return false;
    }
    if(sum + numArray[i] <= targetNum) {
      sum += numArray[i];
      validNums.push(numArray[i]);
    }
  }
  return validNums;
}

function getAllNamesShorterThan(namesArray,targetLength){
  var validNames = [];
  if(!(typeof namesArray === "object")) {
    return false;
  }
  for(var i = 0; i < namesArray.length; i++) {
    if(!(typeof namesArray[i] === "string")) {
      return false;
    }
    if(namesArray[i].length <= targetLength) {
      validNames.push(namesArray[i]);
    }
  }
  return validNames;
}

function makeLabel(personInfo){
  return personInfo.greeting + " " + personInfo.givenName + " " + personInfo.familyName
    + "\n" + personInfo["home address"].streetNumber + " " + personInfo["home address"].streetName
    + "\n" + personInfo["home address"].city + ", " + personInfo["home address"].state + " " +
    personInfo["home address"].zip;
}
