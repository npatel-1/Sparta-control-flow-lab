alert('Welcome to the control flow lab, lets go to the shops');
var item = prompt('What would you like to buy?')

if (item === 'Apple') {
  alert('Apple are £1')
} else {
  // alert('Sorry we sold out of ' + item);
  alert(`Sorry we sold out of ${item}`);
  alert(`How much are 5 bananas?`);
  var banana = 25;
  var price = banana * 5;
  alert(`The price is ${price}`)
}

alert('What flavour ice cream do you have?')

alert('Vanilla, Strawberry and Chocolate');

var item = prompt('Which flavour do you want?');

if (item === 'Vanilla'){
  alert('No problem, I like vanilla too');
} else if (item === 'Strawberry') {
  alert('Strawberry isnt as nice but go for it');
} else if (item === 'Chocolate') {
  alert('Chocolate is amazing');
}{
  alert('Sorry we do not sell that flavour');
}



console.log(item);


//String
//   Alerts
//   Prompts
//Integers / Floats
//Operators (+ - * /)
//Booleans
//Array
//Object (bonus)
//    If / Else
//Switch
