var noiseArray = [];

noiseArray.push("Clang");

noiseArray[1] = "Bang";
noiseArray[2] = "Ding";

noiseArray.length;

// array in an object
var animal = [];

animal.username = "cat";

animal["tagline"] = "Best cat ever!";

animal['noises'] = noiseArray;

noiseArray[3] = animal;

var quackers = {
  username: 'DaffyDuck',
  tagline: 'Yippeee!',
  noises: ['quack', 'honk', 'sneeze', 'growl']
};

var quackers1 = {
  username: 'BobBuilder',
  tagline: 'I build stuff!',
  noises: ['honk', 'sneeze', 'growl']
};

var quackers2 = {
  username: 'PostmanPat',
  tagline: 'Hi!',
  noises: ['quack','sneeze', 'growl']
};

noiseArray.push(quackers);
noiseArray.push(quackers1);
noiseArray.push(quackers2);
