repeat(3, 'ha'); // 'hahaha'
repeat(5, 'xo'); // 'hahaha'
repeat(7, 'seven'); // 'hahaha'

function repeat (num, string) {
  let newString = '';
  for (let i = 1; i <= num; i++) {
    newString = newString + string;
  }
  console.log(newString);
}
