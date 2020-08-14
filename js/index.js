
const numbers = [1, 25, 7, -7, -3, 12, -22, 0];
// ---- Test 1.1 ----

function sort1 (array){
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i ++) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  
}


sort1(numbers);
console.log('Test 1.1:',numbers);


// ----end Test 1.1 ----

// ---- Test 1.2----

function sort2 (array){
  var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i ++) {
        if (checkAbs(array[i - 1]) > checkAbs(array[i])) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
}

function checkAbs(number){
  const absNum = number < 0 ? -number : number;
  return absNum
}

sort2(numbers);
console.log('Test 1.2:', numbers);




// ---- end Test 1.2 ----