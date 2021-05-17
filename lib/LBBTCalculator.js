function lbbtCalc(price) {
  if (price > 145000) {
    return price * 0.02
  }
  return 0;
}

module.exports = lbbtCalc;