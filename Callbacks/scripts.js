// Module Pattern

var Module = function() {

  var privateProperty = 'foo';

  function privateMethod(){
    // do something
  };

  return {
    publicProperty: '',
    publicMethod: function(args) {
      // do something
    },
    privilegedMethod: function(args){
      privateMethod(args);
    };
  };
};

var Car = function() {

  var gasolineLevel = 10;

  function useGas(amt) {
    if (gasolineLevel = amt < 0) {
      console.log("out of gas :[");
    } else {
      gasolineLevel -= amt;
    }
  };

  return {
    radioStation: "104.5",
    changeStation: function(station) {
      this.radioStation = station;
    },
    go: function(speed) { useGas(speed)}
  };
};

// Higher order function
element.addEventListener("click", function() {
  console.log("element clicked!");
})

var ifElse = function(condition, isTrue, ifFalse) {
  if(condition) {
    isTrue();
  } else {
    return isFalse();
  }
};

var logTrue = function() { console.log(true);};
var logFalse = function() { console.log(false);};

ifElse(false, logTrue,logFalse);

// Passing arguments
var increment = function(n) { return n +1; };

var square = function(n) { return n*n };

var doMathSoIDontHaveTo = function(n, func) {
  return func(n);
};

doMathSoIDontHaveTo(5, square);
doMathSoIDontHaveTo(4, increment);

var funcCaller = function(func, arg) {
  return func(arg);
};

var firstVal = function(arr, func) {
  func(arr[0], 0, arr);
};

firstVal = function(list, func) {
  if(Array.isArray(list)){
    func(arr[0],0,arr);
  } else {
    for (var k in list) {
      return func(list[k], k, list);
    }
  }
}
