

var nonsense =  function (string) {
  var blab = function() {
    alert(string);
  }
  return blab;
}

var blabLater = nonsense("this is a string");
var blabAgainLater = nonsense("this is another string");
test();


var lastNameTrier = function (firstName) {
  var innerFunc = function(lastName) {
    console.log(firstName + " " + lastName);
  };
  return innerFunc;
};

var firstNameFarmer = lastNameTrier('Farmer');

firstNameFarmer('Brown');

var storyWriter = function() {
  var story = "";
  return {
    addWords: function(words) {
    story += story + words
    return story.trim(); },
    erase: function() { story = ""}
  };
};

var storyOfMyLife = storyWriter();
storyOfMyLife.addWords('My code broke.');

storyOfMyLife.showWords();

storyOfMyLife.addWords(' But did it?');

var Toaster = function() {
  var
};
