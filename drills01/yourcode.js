function sumArray(arr) {
  return arr.reduce((acc,current) => acc + current);
}

function fitWithinVal(arr, target) {
  let list = [];
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    if(sum + arr[i] > target) continue;
    else {
      sum += arr[i];
      list.push(arr[i]);
    }
  }
  return list;
}

function getAllNamesShorterThan(names, val) {
  return names.filter(n => n.length < val);
}

function makeLabel(person) {
  return (
    `${person.greeting} ${person.givenName} ${person.familyName}
${person["home address"].streetNumber} ${person["home address"].streetName}
${person["home address"].city}, ${person["home address"].state} ${person["home address"].zip}`
  );
}
