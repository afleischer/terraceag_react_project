var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('math', () =>{
    it('should equal 9', () =>{
        3*3;
    });
    it('should equal -8', () => {
        (3-4) *8;
    });
});


/***
 * TL;DR Mocha
 * 
 * describe ('name_of_test_group_string', function Callback(){});
 *  describe is used for groups of test cases
 * 
 * it('should be blah blah blah', function(){insert test case here});
 *  it is used to describe individual test cases.  Use in the form
 * of "it should equal zero", or "it should log the user in".  
 * 
 * Assertion libraries verify that things are correct.
 *  assert is Node.js's buit-in assertion module. 
 * 
 *  assert.equal tests equality of operations using ==
 * 
 * 
 */