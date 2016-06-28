var closureAlert = function () {
  var x = "Help! I'm a variable stuck in a closure!";
  var alerter = function() {
    alert(x);
  };
  alerter();
};

//

var closureAlert = function() {
  var x = "Help! I'm a variable stuck in a closure!";

  var alerter = function () {
    alert(x);
  };

  setTimeout(alerter, 1000);

  console.log("will still run right after");
};

 var closureAlert = function() {
   var x = 0;
   var alerter = function() {
     alert(++x);
   };
   return alerter;
 };

var funcStorer = closureAlert();
var funcStorer2 = closureAlert();
funcStorer();

var add = function() {
  var num1 = mum;

   var addToNum! = function(num2) {
     return num1 + num2;
   };
   return addToNum1;
};

var add5 = add(5);

add5(2)


function counter() {
  var n = 0
  return {
    count: function() { return ++n; },
    reset: function() { n = 0; }
  };
};

var myCounter = counter();


// closure recipe
function checkScope() {
  var innerVar = "localscope";
  function innerFunc() {
    return innerVar;
  };
  return innerFunc;
};

// execution of a closure
var test = checkScope();
test;
test();

var sayAlice = function() {
  var makeLog = function() {
    console.log(alice);
  };

  var alice = 'Why hello there, Alice!';

  return makeLog;
}
var whatDoesSheSay = sayAlice();
whatDoesSheSay();

var makeStopwatch = function() {
  console.log('initialized');
  var elapsed = 0;
  console.log(elapsed);

  var stopwatch = function(){
    console.log('stopwatch');
    return elapsed;
  };
  var increase = function() { elapsed++; };
  setInterval(increase, 1000);

  return stopwatch;
};

var x = makeStopwatch();
