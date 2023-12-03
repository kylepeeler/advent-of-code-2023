var fs = require('fs');
var fileContentSync = fs.readFileSync('./1pt1data.txt', 'utf8');
var lines = fileContentSync.split(/\r?\n/); // Split by new line
var sum = 0;
var getCalibrationValue = function (input) {
    var digitsOnly = input.replace(/[^0-9]/g, '');
    if (!digitsOnly.length)
        return;
    var firstDigit = Number(digitsOnly[0]);
    var lastDigit = Number(digitsOnly[digitsOnly.length - 1]);
    var combinedValue = Number("".concat(firstDigit).concat(lastDigit));
    sum += combinedValue;
    console.log(JSON.stringify({ firstDigit: firstDigit, lastDigit: lastDigit, combinedValue: combinedValue, sum: sum }));
};
lines.forEach(function (line, index) {
    getCalibrationValue(line);
});
console.log("The answer is ".concat(sum));
