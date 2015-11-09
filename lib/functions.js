
module.exports = {
  push: function push (array, item) {
    array[array.length] = item;
    return array;
  }, 

  pop: function pop (array) {
    var newArray = [];
    for (var i = 0; i < array.length-1; i++) {
      newArray[i] = array[i];
    };
    return newArray;
  },

  shift: function shift (array) {
    var newArray  = [];
    for (var i = 1; i<array.length; i++)  {
      newArray[i-1] = array[i];
    }
    return newArray;
  }, 

  unshift: function unshift (array, item) {
    var newArray = [];
    for (var i = 0; i < array.length;  i++) {
      newArray[i+1] = array[i];
    };
    newArray[0] = item;
    return newArray;
  },

  unique: function unique (array) {
    var newArray = [];
    for (var i = 0; i< array.length; i++) {
      if (newArray.indexOf(array[i]) == -1) {
        newArray[newArray.length] = array[i]
      };
    };
    return newArray;
  },

  frequency: function frequency (array) {
    var count = 0;
    var letter;
    var obj = {};
    var str = "";
    for (var i = 0; i<array.length; i++) {
      str+=array[i];
    };

  var splitedStr = str.split("");
  for (var j=0; j<splitedStr.length; j++) {
    if (!obj.hasOwnProperty(splitedStr[j])){
      obj[splitedStr[j]] = 1
    } else {
      obj[splitedStr[j]]++;
    };
  };
  var objProp = Object.keys(obj);
  for (var k=0; k<objProp.length; k++) {
    if (obj[objProp[k]]>count) {
      count = obj[k];
      letter = objProp[k];
    };
  };
  return letter;
  };
}