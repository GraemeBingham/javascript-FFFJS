// _.each() defined
_.each([1,2,3], function(val,i,list) {
  console.log(val);
});

var pocketmon = ['Charisaur','Bulbazard', 'Twomew'];

var logger = function(val){
  console.log();
};

_.each(pocketmon, logger);

function AnimalMaker(name) {
  return{
    speak: function() {
      console.log("my name is ", name);
    }
  };
};

var animaNames = ['Smokey', 'Fluffy', 'Trigger'];
var farm = [];

_.each(animaNames, function(name){
  farm.push(AnimalMaker(name));
});

// _.map()defined
// what ever is returned is put into an array

var pocketmon = ['Charisaur','Bulbazard', 'Twomew'];

var excitedArr = function(val) {
  return val + '!!!';
}

var excitedPocketmon = _.map(pocketmon, excitedArr);

function AnimalMaker(name) {
  return{
    speak: function() {
      console.log("my name is ", name);
    }
  };
};

var animaNames = ['Smokey', 'Fluffy', 'Trigger'];
var farm = [];

_.each(animaNames, function(name){
  farm.push(AnimalMaker(name));
});

var farm = _.map(animaNames, AnimalMaker);
