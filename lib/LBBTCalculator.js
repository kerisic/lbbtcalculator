function lbbtCalc(price) {
  if (price < 0) {
    return 'Price cannot be less than zero!';
  }

  function thresholdCalc(minRange, maxRange, percentage) {
    if (price <= minRange) {
      return 0;
    } else {
      const max = price > maxRange ? maxRange : price
      return (max - minRange) * percentage;
    }
  }

  const thresholdRanges = [{minRange: 750000, maxRange: Number.MAX_VALUE, percentage: 0.12}, 
    {minRange: 325000, maxRange: 750000, percentage: 0.1}, 
    {minRange: 250000, maxRange: 325000, percentage: 0.05}, 
    {minRange: 145000, maxRange: 250000, percentage: 0.02}];

  let sum = 0;

  for(let i=0; i < thresholdRanges.length; i++) {
    total = thresholdCalc(thresholdRanges[i].minRange, thresholdRanges[i].maxRange, thresholdRanges[i].percentage)
    sum += total;
  }

  return sum;
}

module.exports = lbbtCalc;
