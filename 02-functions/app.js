// a*x^2 + b*x + c = 0

const solveEquation = function (a, b, c) {
  let x1 = null;
  let x2 = null;
  const d = b*b - 4*a*c;
  if (d === 0) {
    x1 = -b / (2*a);
    x2 = -b / (2*a);
  }
  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2*a);
    x2 = (-b - Math.sqrt(d)) / (2*a);
  }
  return [x1, x2]
}

const solveEquation2 = function (a, b, c) {
  const d = b*b - 4*a*c;
  if (d === 0) {
    return [-b / (2*a), -b / (2*a)];
  }
  if (d > 0) {
    return [(-b + Math.sqrt(d)) / (2*a), (-b - Math.sqrt(d)) / (2*a)];
  }
  return [null, null]
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [4, 5, 6],
  [4, 5, 6],
  [4, 5, 6],
  [4, 5, 6],
  [4, 5, 6],
  [4, 5, 6],
]

// arr.unshift(arr[arr.length - 1])
// pop
// push
// shift

function shiftMatrix() { return [] }