function lengthString(string, maxLength) {
  if (string <= maxLength) {
    return true;
  }
  return false;
}

lengthString('вперед и вверх', 20);

const isPalindrome = (originString) => {
  const normalizeText = originString
    .replaceAll(' ', '')
    .toLowerCase();
  const reverseNormolizerText = normalizeText
    .split('')
    .reverse()
    .join('');
  return normalizeText === reverseNormolizerText;
};

isPalindrome('топот');
isPalindrome('Лёша на полке клопа нашёл ');
