
// ---- Common ---------------------------------------------------------------------
const numbers = [1, 25, 7, -7, -3, 12, -22, 0];

function merge (a,b) { 
  var result = []; 
  while (a.length >0 && b.length >0) 
      result.push(a[0] < b[0]? a.shift() : b.shift()); 
  return result.concat(a.length? a : b); 
} 

function sort (array){
  if (array.length < 2) return array; 
  var mid = (array.length /2).toFixed(0); 
  var subLeft = sort(array.slice(0,mid)); 
  var subRight = sort(array.slice(mid)); 
   
  return merge(subLeft, subRight);
  
}

// ---- Test 1.1 ---------------------------------------------------------------------


function sort1 (){
  const arr =  sort(numbers)
  console.log('Test 1.1:',arr);
}

sort1(numbers);




// ---- Test 1.2-----------------------------------------------------------------------

function checkAbs(number){
  const absNum = number < 0 ? -number : number;
  return absNum
}

function sort2 (array){

  let done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < array.length; i ++) {
        if (checkAbs(array[i - 1]) > checkAbs(array[i])) {
          done = false;
          let tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
    console.log('Test 1.2:', array);
}
sort2(numbers);




// ---- test  1.3 ------------------------------------------------------------------------------

function sort3(array) {
  const negativeNumbers = sort(array.filter(item => item < 0))
  const positiveNumbers = sort(array.filter(item => item > 0))
  const arrayAll = [...positiveNumbers, ...negativeNumbers]
  console.log('Test 1.3:', arrayAll)
}
sort3(numbers);

// ---- test  2 ------------------------------------------------------------------------------
function test2(n){
  if(n === 0){
    return n
  }
  return n + test2(n -1)
  
}
console.log('test 2:', test2(10))

// ---- test  3 ------------------------------------------------------------------------------

function openModal  (){
  var element = document.getElementById("modal-overlay");
   element.classList.add("open-popup");
}
function closeModal  (){
  var element = document.getElementById("modal-overlay");
   element.classList.remove("open-popup");
}