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
    return (max - 145000) * 0.02;
    }
  }

  function thresholdTwo(price) {
    if (price <= 250000) {
      return 0
    } else {
    price > 325000 ? max = 325000 : max = price
    return (max - 250000) * 0.05;
    }
  }

  function thresholdThree(price) {
    if (price <= 325000) {
      return 0
    } else {
    price > 750000 ? max = 750000 : max = price
    return (max - 325000) * 0.1;
    }
  }

  function thresholdFour(price) {
    if (price <= 750000) {
      return 0
    } else {
    return (price - 750000) * 0.12;
    }
  }
}

module.exports = lbbtCalc;
