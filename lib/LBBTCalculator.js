function lbbtCalc(price) {
  taxFour = thresholdFour(price);
  taxThree = thresholdThree(price);
  taxTwo = thresholdTwo(price);
  taxOne = thresholdOne(price);
  return taxOne + taxTwo + taxThree + taxFour;

  function thresholdOne(price) {
    if (price <= 145000) {
      return 0
    } else {
    price > 250000 ? max = 250000 : max = price
    thresholdOne = max - 145000;
    taxOne = thresholdOne * 0.02;
    return taxOne;
    }
  }

  function thresholdTwo(price) {
    if (price <= 250000) {
      return 0
    } else {
    price > 325000 ? max = 325000 : max = price
    thresholdTwo = max - 250000;
    taxTwo = thresholdTwo * 0.05;
    return taxTwo;
    }
  }

  function thresholdThree(price) {
    if (price <= 325000) {
      return 0
    } else {
    price > 750000 ? max = 750000 : max = price
    thresholdThree = max - 325000;
    taxThree = thresholdThree * 0.1;
    return taxThree;
    }
  }

  function thresholdFour(price) {
    if (price <= 750000) {
      return 0
    } else {
    thresholdFour = price - 750000;
    taxFour = thresholdFour * 0.12;
    return taxFour;
    }
  }
}

module.exports = lbbtCalc;
