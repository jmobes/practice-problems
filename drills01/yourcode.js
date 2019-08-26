
function sumArray(numArray){
  var sum = 0;
  for(var i = 0; i < numArray.length; i++) {
    sum += numArray[i];
  }
  return sum;
}

function fitWithinVal(numArray,targetSum){
  var sum = 0;
  var acceptedNums = [];
  for(var i = 0; i < numArray.length; i++) {
    if(!(sum + numArray[i] > targetSum)) {
      sum += numArray[i];
      acceptedNums.push(numArray[i]);
    }
  }
  return acceptedNums;
}

function getAllNamesShorterThan(array,max){

  var names = [];
  for(var i = 0; i < array.length; i++) {
    if(array[i].length < max) {
      names.push(array[i]);
    }
  }
  console.log(names);
  return names;
}

function makeLabel(personObject){

  return personObject.greeting + " " + personObject.givenName + " " +
         personObject.familyName + "\n" + personObject["home address"].streetNumber +
         " " + personObject["home address"].streetName + "\n" + personObject["home address"].city + ", " +
         personObject["home address"].state + " " + personObject["home address"].zip;

}
