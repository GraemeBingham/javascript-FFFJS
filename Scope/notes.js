// Reveiw Anatomy of a function
var add =  function(a, b) {
  return a + b
}

add(3,4,5);

var x = 'global!';

function encapsulate(){
  z = 'gloabl here, too';

  window.y = 'also global';
}
