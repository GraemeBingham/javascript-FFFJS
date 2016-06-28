var pocketmon = ['Charisaur','Bulbazard', 'Twomew'];

var loggerVal = function(val){
  console.log(val);
};

var loggerIndex = function(v, i){
  console.log(i);
};

_.each(pocketmon, loggerVal);
_.each(pocketmon,loggerIndex);


var helloArr = ['bonjour', 'hello', 'hola'];

var checkValue = function(array, val) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === val) {
      return true;
    }
  }
  return false;
};

checkValue(helloArr,'hello');

var checkEachValue = function (array, val) {
  var result = false;
  _.each(array, function(v) {
    if (v === val) {
      return true;
    }
  });
  return result;
};

checkEachValue(helloArr, 'hola')

// loop over object and get values
var myNums = _.map({two: 2, four: 4, three: 3, twelve: 12}, function (val, prop, obj) {
  return val;
});

// filter values returns that passes truth statment

_.filter({two: 2, four: 4, three: 3, twelve: 12}, function (val) {
  return val % 2 === 0;

  
})
