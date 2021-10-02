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

}); 