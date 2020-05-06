localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'
localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'

function extractLanguage (locale) {
  return locale.slice(0, 2);
}

function extractRegion (locale) {
  return locale.slice(3, 5);
}

function greet (lang) {
  switch (lang) {
    case 'US': return 'Hey!';
    case 'GB': return 'Hello!';
    case 'AU': return 'Howdy!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }
}

function localGreet (string) {
  let i;

  if (extractLanguage(string) === 'en') {
    i = extractRegion(string);
  } else {
    i = extractLanguage(string);
  }

  console.log(greet(i));
}
