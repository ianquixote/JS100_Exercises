extractLanguage('en_US.UTF-8');
extractLanguage('en_GB.UTF-8');
extractLanguage('ko_KR.UTF-16');

function extractLanguage (locale) {
  console.log(locale.slice(3, 5));
}
