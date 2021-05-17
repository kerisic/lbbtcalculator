describe('LBBT Calculator', function() {
  var lbbtCalc  = require('../lib/LBBTCalculator');

  describe('it should return the correct amount of LBBT', function() {
    it('should return 0 if the house price is up to £145000', () => {
      expect(lbbtCalc(145000)).toEqual(0);
    });
  });
    
});