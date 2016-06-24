// anatomy

var add = function (a, b) {
  return a + b
};

add(3,4);

var nameImprover = function (name, adj) {
  return 'Col ' + name + " Mc" + adj + ' pants';
};

myArr.forEach(function(val){console.log(val);});

$('button').on('click', function() {
  console.log('Don\'t press my buttons!');
});

var add = function(a,b) {
  console.log(arguments);
    return a + b;
}

// This is a constructor
function AnimalMaker(name) {
  return {
    speak: function () {
      console.log("my name is ", name);
    },
    name: name,
    owner: 'Bianca'
  }
}
//Call AnimalMaker function
myAnimal.speak();

// Bracket notation
myAnimal['speak']();


var animalNames = ['Sheep', 'Liger', 'Big Bired'];

var farm = [];

// Create all animals in list as objects to farm
for (var i = 0; i < animalNames.length; i++) {
  farm.push(AnimalMaker(animalNames[i]));
}

for (var i = 0; i < farm.length; i++) {
  farm[i].speak();
}
