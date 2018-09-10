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
}
  else {
    alert('Sorry we do not sell that flavour');
  }

  alert('Alright, how much does Strawberry ice cream cost? I would like that please.')
  alert( '£1 per scoop, but I will give you an extra one for free.')
  var iceCream = 1;
  var price = iceCream * 2 - 1;
  alert(`The price is ${price}`)

console.log(item);

  alert('Anything else?');
  alert('Can I get a beer please?')





//   String
//   Alerts
//   Prompts
//Integers / Floats
//Operators (+   - * /)
//Booleans
//Array
//Object (bonus)
//    If / Else
//Switch
