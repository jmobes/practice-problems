
function sumArray(numArr){
  let sum = 0;
	for(let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  return sum;
}

function fitWithinVal(numArr, target){
  let sum = 0;
  let count = 0;
  for(let i = 0; i < numArr.length; i++) {
    if(sum + numArr[i] > target) {
      numArr = numArr.splice(i,1);
    }
    else {
      sum += numArr[i];
    }
  }
  return numArr;
}

function getAllNamesShorterThan(nameArr, nameTargetLength){
  return nameArr.filter(name=> name.length < nameTargetLength);
}

function makeLabel(label){
  return `${label[0].greeting} ${label[0].givenName}
  ${label[0]["home address"].streetNumber}
  ${label[0]["home address"].city}, ${label[0]["home address"].state} ${label[0]["home address"].zip}`;
}
