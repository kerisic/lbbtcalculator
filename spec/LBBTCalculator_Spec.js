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

  
  describe('it should return 2% of the price that is over the threshold if the house price is above £145000 and up to £250000', function() {
    
    it('should return 60 if the house price is £148000', () => {
      expect(lbbtCalc(148000)).toEqual(60);
    });

    it('should return 2100 if the house price is £250000', () => {
      expect(lbbtCalc(250000)).toEqual(2100);
    });
  });

  
  describe('it should return the right tax above each threshold for 2% and 5% if the house price is above £250000 and up to £325000', function() {

    it('should return 3600', () => {
      expect(lbbtCalc(280000)).toEqual(3600);
    });

    it('should return 5850', () => {
      expect(lbbtCalc(325000)).toEqual(5850);
    });
  });

  describe('it should return the right tax above each threshold of 2, 5% and 10% if the house price is above £325000 and up to £725000', function() {
    it('should return 9350', () => {
      expect(lbbtCalc(360000)).toEqual(9350);
    });

    it('should return 43350', () => {
      expect(lbbtCalc(700000)).toEqual(43350);
    });
  });

  describe('it should return the right tax above each threshold of 2, 5%, 10% and 12% if the house price is above £750000', function() {
    it('should return 46350', () => {
      expect(lbbtCalc(760000)).toEqual(49550);
    });

    it('should return 78350', () => {
      expect(lbbtCalc(1000000)).toEqual(78350);
    });
  });
    
});