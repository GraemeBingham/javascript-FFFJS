//Use this file to implement Part One of your project
var animal = {};

animal.username = "cat";

animal["tagline"] = "Best cat ever!";

noises = [];

animal["noises"] = noises ;

console.log(animal);

for (var key in animal) {
  if (animal.hasOwnProperty(key)) {
    if (key === "username") {
      console.log("Hi my name is " + animal[key]);
    } if (key === "tagline") {
      console.log("I like to say " + animal[key]);
    }
  }
}
