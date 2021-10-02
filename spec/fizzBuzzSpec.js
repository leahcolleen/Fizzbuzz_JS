describe ('Fizzbuzz', function() {
  //use let here because I reaasign fizzbuzz later
  let fizzbuzz;
  describe('knows when a number is', function(){
    //create an instance of Fizzbuzz to test against later
    it('divisible by 3', function(){
      //whenever referring to a class or method put (); at the end of it
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true)
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 3', function(){
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false)
    });
  });

  describe('knows when a number is', function(){
    it('divisible by 5', function(){
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true)
    });
  });

  describe('knows when a number is NOT', function() {
    it('divisible by 5', function(){
      fizzbuzz = new Fizzbuzz();
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false)
    });
  });
});
