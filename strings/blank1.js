isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true

function isBlank (string) {
  if (string === '') {
    console.log('true');
  } else {
    console.log('false');
  }
}
