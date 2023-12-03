const fs = require('fs');

const fileContentSync = fs.readFileSync('./1pt2data.txt', 'utf8');
const lines = fileContentSync.split(/\r?\n/); // Split by new line

let sum = 0;

const getCalibrationValue = (input: string) => {


const replaceInput = (input) => 
              input.replace(/one/g, '1')
                    .replace(/two/g, '2')
                    .replace(/three/g, '3')
                    .replace(/four/g, '4')
                    .replace(/five/g, '5')
                    .replace(/six/g, '6')
                    .replace(/seven/g, '7')
                    .replace(/eight/g, '8')
                    .replace(/nine/g, '9')
                    .replace(/[^0-9]/g, '');

  if (!replaced.length) return;

  const firstDigit = Number(replaced[0]);
  const lastDigit = Number(replaced[replaced.length - 1]);
  const combinedValue = Number(`${firstDigit}${lastDigit}`)
  sum += combinedValue;
  console.log(JSON.stringify({replaced, firstDigit, lastDigit, combinedValue, sum}));
}

lines.forEach((line, index) => {
  getCalibrationValue(line);
});

console.log(`The answer is ${sum}`);
