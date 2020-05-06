console.log(isBlank('mars'));
console.log(isBlank('  '));
console.log(isBlank(''));

function isBlank (string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '' || string[i] === ' ') {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
