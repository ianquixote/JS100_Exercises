let string = 'launch school tech & talk';

function capitalize(string) {
  let array = string.split(' ');
  let capsArray = array.map(word => word[0].toUpperCase() + word.slice(1));
  return capsArray.join(' ');
}

console.log(capitalize(string));
