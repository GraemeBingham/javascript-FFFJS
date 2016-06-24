// create and array
var box = [];

box[0] = true;
box[1] = 'meow';

box['size'] = 9;

for(var k in box) {
  // log properties
  console.log(k);
  // log values
  console.log(box[k]);
}
