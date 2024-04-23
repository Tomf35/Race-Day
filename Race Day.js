let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;
const age = 19;

if (registeredEarly === true && age > 17) {
  raceNumber += 1000;
}

if (registeredEarly === true && age > 17) {
  console.log('Runner' + ' ' + raceNumber + ' ' + 'you will race at 9:30am');
} else if (age < 18) {
  console.log('Runner' + ' ' + raceNumber + ' ' + 'you will race at 12:30pm');
} else {
  console.log('Runner' + ' ' + raceNumber + ' ' + 'you will race at 11:00am');
}

