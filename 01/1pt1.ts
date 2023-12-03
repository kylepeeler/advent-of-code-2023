const fs = require('fs');

const fileContentSync = fs.readFileSync('./1pt1data.txt', 'utf8');
const lines = fileContentSync.split(/\r?\n/); // Split by new line

let sum = 0;

const getCalibrationValue = (input: string) => {
  const digitsOnly = input.replace(/[^0-9]/g, '');
  if (!digitsOnly.length) return;

  const firstDigit = Number(digitsOnly[0]);
  const lastDigit = Number(digitsOnly[digitsOnly.length - 1]);
  const combinedValue = Number(`${firstDigit}${lastDigit}`)
  sum += combinedValue;
  console.log(JSON.stringify({firstDigit, lastDigit, combinedValue, sum}));
}

lines.forEach((line, index) => {
  getCalibrationValue(line);
});

console.log(`The answer is ${sum}`);
