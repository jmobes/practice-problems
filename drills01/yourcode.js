
function sumArray(numArr){
  let sum = 0;
	for(let i = 0; i < numArr.length; i++) {
    sum += numArr[i];
  }
  return sum;
}

function fitWithinVal(numArr, target){

}

function getAllNamesShorterThan(nameArr, nameTargetLength){
  return nameArr.filter(name=> name.length < nameTargetLength);
}

function makeLabel(label){
  return `${label[0].greeting} ${label[0].givenName}
  ${label[0]["home address"].streetNumber}
  ${label[0]["home address"].city}, ${label[0]["home address"].state} ${label[0]["home address"].zip}`;
}
