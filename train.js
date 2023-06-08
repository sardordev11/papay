// F - Task

function extractDigits(inputString) {
    let digits = inputString.replace(/\D/g, '');
    return digits;
  }
  let originalString = "JONIBEK123BORONOV456";
let digitsString = extractDigits(originalString);
console.log(digitsString);
