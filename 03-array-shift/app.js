function shiftArrayRight(arr, shiftSize) {
  const myArr = [...arr];
  for (let i = 0; i < shiftSize; i++) {
    myArr.unshift(myArr[myArr.length - 1]);
    myArr.pop();
  }
  return myArr;
};

function shiftArrayLeft(arr, shiftSize) {
  // const myArr = [...arr];
  // for (let i = 0; i < shiftSize; i++) {
  //   myArr.push(myArr[0]);
  //   myArr.shift();
  // }
  return shiftArrayRight(myArray, arr.length - shiftSize);
};


function shiftMatrixRight(matrix, shiftSize) {
  // [ [1,2,3], [4,5,6] ]
  for () {
    shiftArrayRight()
  }
  return ;
}

const myArray = [100, "king", 123, 3, 4];
const shiftSize = 1;

const result = shiftArrayRight(myArray, shiftSize);
const result2 = shiftArrayLeft(myArray, shiftSize);

console.log(myArray);
console.log(result);
console.log(result2);

// option 1
// const b = [];
// for (let i=0; i<a.length; i++) {
//   b[i] = a[i];
// }

// option 2
// const b = a.slice();

// option 3 (ES6)
// ... - spread operator

