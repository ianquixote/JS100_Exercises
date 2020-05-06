
let escape = '\n'
let octal = '\001'

let string = `A pirate I was meant to be!${escape}Trim the sails${octal} and roam the sea!`;
console.log(string);

let array = ['\001', '\002', '\003']

for (let i = 4; i <= 5; i++) {
  let string = '';
  string += '\\u000';
  string += i;
  newString = string.slice(0);
  array.push(newString);
}

console.log(array)

array.forEach(i => console.log(i));
