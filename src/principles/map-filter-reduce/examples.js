/**
 * Array.prototype.map()
 */

const names = [" Tom Hanks ", " Sandra Bullock"];

const formattedNames = names.map((name) => name.trim());

console.log(formattedNames);

/**
 * Array.prototype.filter()
 */

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);

/**
 * Array.prototype.reduce()
 */

const cartItems = [
  {
    name: "Shoes",
    price: 10
  },
  {
    name: "Shirt",
    price: 30
  },
  {
    name: "Ring",
    price: 50
  }
];

const cartTotal = cartItems.reduce((total, currItem) => {
  return total + currItem.price;
}, 0);

console.log(cartTotal);
