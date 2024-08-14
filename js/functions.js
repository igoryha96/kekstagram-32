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

//Функция переводит часы в минуты.
function getMinutesOfHour(time) {

  const [hour, minutes] = time.split(':');

  const minutesOnHour = 60;

  return hour * minutesOnHour + parseInt(minutes, 10);
}

const getResultTime = (timeStart, timeEnd, timeStartMeeting, timeMeeting) => {
  const timeStartToMinutes = getMinutesOfHour(timeStart);
  const timeEndToMinutes = getMinutesOfHour(timeEnd);
  const timeStartMeetingToMinutes = getMinutesOfHour(timeStartMeeting);

  const timeWork = (timeEndToMinutes - timeStartMeetingToMinutes);

  if (timeStartMeetingToMinutes < timeStartToMinutes) {
    return false;
  }

  if (timeWork >= timeMeeting) {
    return true;
  }
  else {
    return false;
  }
};


getResultTime('8:0', '10:0', '8:0', 120);// true
getResultTime('08:00', '17:30', '14:00', 90); // true
getResultTime('08:00', '14:30', '14:00', 90); // false
getResultTime('14:00', '17:30', '08:0', 90);// false
getResultTime('8:00', '17:30', '08:00', 900); // false
