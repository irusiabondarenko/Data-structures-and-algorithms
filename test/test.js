var expect = require('chai').expect;
var func = require(__dirname + '/../lib/functions.js');

describe('push method', function(){
  it('should add element into the end of array', function() {
    var array = [3,4,5,6];
    func.push(array, 2);
    expect(array[array.length - 1]).to.eql(2);
  });
});

describe('pop method', function(){
  var array =[3,4,5,6];
  var newArray = func.pop(array);

  it('should remove the last element of the array', function(){
    expect(newArray.length).to.equal(3);
  });
});

describe('shift method', function(){
  var array = [3,4,5,6];
  var newArray = func.shift(array);

  it('should remove the first element of the array', function(){
    expect(newArray.length).to.equal(3);
  });
});

describe('unnshift method', function(){
  it('should paste the elements in front of an array', function() {
    var array = [3,4,5,6];
   var newArray =  func.unshift(array, 8);
    expect(newArray[0]).to.equal(8);    
  });
});

describe('unique function', function(){
  it('should return an array with removed dublicates', function() {
    var array = [1,2,3,3,3,4,4,4,5,5,7,7,7];
    var newArray = func.unique(array);
    expect(newArray).to.eql([1,2,3,4,5,7]);
  });
});

describe('frequency function', function(){
  it('should return the most common letter in an array of english words', function() {
    var array = ['aaaaa', 'bbb', 'cc', 'd'];
    var letter = func.frequency(array);
    expect(letter).to.equal('a')
  })
});