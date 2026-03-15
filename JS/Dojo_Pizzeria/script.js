function pizzaOven(crustType, sauceType, cheeses, toppings) {
  var pizza = {};
  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;
  return pizza;
}

var p1 = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzarella"],
  ["pepperoni", "sausage"],
);
console.log(p1);

var p2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"],
);
console.log(p2);

var p3 = pizzaOven(
  "thin crust",
  "pesto",
  ["feta", "parmesan"],
  ["chicken", "spinach"],
);
console.log(p3);

var p4 = pizzaOven(
  "stuffed crust",
  "alfredo",
  ["mozzarella", "provolone"],
  ["bacon", "jalapenos"],
);
console.log(p4);

function randomPizza() {
  var crustTypes = ["deep dish", "hand tossed", "thin crust"];
  var sauceTypes = ["traditional", "toum", "Shatta"];
  var cheeses = ["mozzarella", "feta", "parmesan"];
  var toppings = ["spinach", "sausage", "chicken", "olives"];

  var randomCrust = crustTypes[Math.floor(Math.random() * crustTypes.length)];
  var randomSauce = sauceTypes[Math.floor(Math.random() * sauceTypes.length)];
  var randomCheese = cheeses[Math.floor(Math.random() * cheeses.length)];
  var randomTopping = toppings[Math.floor(Math.random() * toppings.length)];

  return pizzaOven(randomCrust, randomSauce, [randomCheese], [randomTopping]);
}

var randomP = randomPizza();
console.log(randomP);
