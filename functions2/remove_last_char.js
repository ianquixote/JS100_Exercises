removeLastChar('ciao!'); // 'ciao'
removeLastChar('hello'); // 'hell'

function removeLastChar(string) {
  console.log(string.slice(0, -1));
}
