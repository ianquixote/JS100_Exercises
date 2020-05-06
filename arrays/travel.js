let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false

function contains(string, array) {
  let x = false;
  array.forEach(function(location) {
    if (location === string) {
      x = true;
    }
  })
  return x;
}
