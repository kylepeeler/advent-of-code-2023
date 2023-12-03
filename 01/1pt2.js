var fs = require('fs');
var fileContentSync = fs.readFileSync('./1pt2data.txt', 'utf8');
var lines = fileContentSync.split(/\r?\n/); // Split by new line
var sum = 0;
var getCalibrationValue = function (input) {
    var replaced = input
        .replace(/one/g, '1')
        .replace(/two/g, '2')
        .replace(/three/g, '3')
        .replace(/four/g, '4')
        .replace(/five/g, '5')
        .replace(/six/g, '6')
        .replace(/seven/g, '7')
        .replace(/eight/g, '8')
        .replace(/nine/g, '9')
        .replace(/[^0-9]/g, '');
    if (!replaced.length)
        return;
    var firstDigit = Number(replaced[0]);
    var lastDigit = Number(replaced[replaced.length - 1]);
    var combinedValue = Number("".concat(firstDigit).concat(lastDigit));
    sum += combinedValue;
    console.log(JSON.stringify({ replaced: replaced, firstDigit: firstDigit, lastDigit: lastDigit, combinedValue: combinedValue, sum: sum }));
};
lines.forEach(function (line, index) {
    getCalibrationValue(line);
});
console.log("The answer is ".concat(sum));
