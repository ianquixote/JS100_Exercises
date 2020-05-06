let scores = [96, 47, 113, 89, 100, 102];

function count(array) {
  return array.filter(number => number >= 100).length;
}

console.log(count(scores));
