function add_arrays(array1,array2) {
  var sumArray = [];

  if(!Array.isArray(array1) || !Array.isArray(array2)) {
    return "Cannot add data types that are not Arrays";
  }
  else if (array1.length === 0 || array2.length === 0) {
    return "Cannot add empty array";
  }
  else if (array1.length != array2.length) {
    return "Cannot add arrays of unequal length";
  }
  else {
    for(var i = 0; i < array1.length; i++) {
      if((typeof array1[i] != "number") || (typeof array2[i] != "number")) {
        return "Cannot add values that are not numbers";
    }
      else if (isNaN(array1[i]) || isNaN(array2[i])) {
        return "Cannot add NaN";
    }
    sumArray[i] = array1[i] + array2[i];
  }
}
  return sumArray;
}


var arr1 = [4,3,5,8,4,2,4,7];
var arr2 = [1,12,43,54,76,78,67,3];

var array = add_arrays(arr1,arr2);
console.log(array);
