const hdPrice = 3.25;
const ffPrice = 2.0;
const sPrice = 1.5;
let hotDogs = 0;
let frenchFries = 0;
let sodas = 0;
let subtotal = 0;
let discount = 0;
let tax = 0;
let total = 0;

window.onload = function () {
  // get num items per order item
  hotDogs = prompt("Number of hot dogs:", 0);
  frenchFries = prompt("Number of french fries portions:", 0);
  sodas = prompt("Number of sodas", 0);

  /* get raw subtotal. 
     NOTE: prompt returned STRINGS, but upon seeing
     the multiplication sign, javascript turned them into numbers;
     if there were no * with the prices, and only + with the prompted
     values, it would have concatenated them instead!
  */
  subtotal = hdPrice * hotDogs + ffPrice * frenchFries + sPrice * sodas;

  // discount either applies if raw subtotal >=20 or stays 0
  if (subtotal >= 20) {
    discount = subtotal * 0.1;
  }

  // meals tax MA
  tax = (subtotal - discount) * 0.0625;

  // total after tax
  total = subtotal - discount + tax;

  // insert into table
  document.getElementById("hotdogs-num").innerHTML = hotDogs;
  document.getElementById("frenchfries-num").innerHTML = frenchFries;
  document.getElementById("sodas-num").innerHTML = sodas;
  document.getElementById("subtotal").innerHTML = "$" + subtotal.toFixed(2);
  document.getElementById("discount").innerHTML = "-$" + discount.toFixed(2);
  document.getElementById("tax").innerHTML = "+$" + tax.toFixed(2);
  document.getElementById("total").innerHTML = "$" + total.toFixed(2);
};
