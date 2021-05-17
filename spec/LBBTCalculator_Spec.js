describe('LBBT Calculator', function () {
  var lbbtCalc = require('../lib/LBBTCalculator');

  describe('it should return the correct amount of LBBT', function () {

    describe('it should return 0 if the house price is up to £145000', function () {

      it('should return 0 if the house price is £145000', () => {
        expect(lbbtCalc(145000)).toEqual(0);
      });

      it('should return 0 if the house price is £100000', () => {
        expect(lbbtCalc(100000)).toEqual(0);
      });
    });
  });

  
  describe('it should return 2% of the price if the house price is above £145000 and up to £250000', function() {
    
    it('should return 2960 if the house price is £148000', () => {
      expect(lbbtCalc(148000)).toEqual(2960);
    });

    it('should return 5000 if the house price is £250000', () => {
      expect(lbbtCalc(250000)).toEqual(5000);
    });
  });
    

});