function validateMastercard(cardNumber) {
  //Remove non-digit characters
    const cardNumberLiteral = cardNumber.toString();
    const properCreditCardFormat = cardNumberLiteral.replace(/\D+/g, '');
    

  //Check for valid mastercard length of 16 digits
    if (properCreditCardFormat.length !== 16) {
    console.log( "Invalid MasterCard Number: Invalid Length");
    return false;
    }

  //Check for valid Mastercard prefix [51 - 55]
    const mastercardStartingNumbers = properCreditCardFormat.substring(0,2);
    if (!['51', '52', '53', '54', '55'].includes(mastercardStartingNumbers)) {
    console.log("Invalid MasterCard Number: Invalid Prefix")
    return false;
    }

//Luhn algorithm for validation of checksum
    let sum = 0;
    let doubleDigit = false;

    for (let i = properCreditCardFormat.length - 1; i >= 0; i--) {
    let digit = parseInt(properCreditCardFormat[i], 10);
    if (doubleDigit) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    doubleDigit = !doubleDigit;
  }
    
   if (sum % 10 !== 0) {
    console.log("Invalid MasterCard: Failed Luhn Check");
    return false;
}

// If all checks pass
console.log('Valid Mastercard number')
return true;
}


validateMastercard(4527287488200994975);
validateMastercard(5136246725888995);
validateMastercard(5487925789654364);
validateMastercard(5348796547856321);
validateMastercard(5199148678901234);