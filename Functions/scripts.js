var AnimalTestUser =  function(username) {
  var argLength = arguments.length;
  var otherArgs = [];
  if (argLength> 1) {
    for (var i = 0; i < argLength.length; i++) {
      argLength.push(arguments[i]);
    }
  }
  return {
    username: username,
    otherArgs: otherArgs
  }
};

var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true}, [1,2,3] );
console.log(testSheep);

function AnimalCreator(username,species,tagline,noises) {
  var newAnimal = {
    username: username,
    species: species,
    noises: noises,
    tagline: tagline,
    friends: []
  };
  return newAnimal;
}

var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
console.log(sheep);

var cow = AnimalCreator('test', 'cow', 'Love cows', ['Mow', 'Meew']);

var addFriend = function(animal, friend) {
  animal.friends.push(friend.username);
}

addFriend(sheep, cow);
console.log(sheep);
