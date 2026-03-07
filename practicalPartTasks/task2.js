const ProductsDiscount = new WeakMap();

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  setDiscount(discount) {
    ProductsDiscount.set(this, discount);
  }

  getDiscount() {
    return ProductsDiscount.get(this) || 0;
  }
  
}

let p1 = new Product("Apple", 100);
let p2 = new Product("Orange", 150);
let p3 = new Product("Banana", 80);

p1.setDiscount(10);
p2.setDiscount(15);
p3.setDiscount(5);

console.log("Before deletion:");

console.log(`p1 discount: ${p1.getDiscount()}%`);
console.log(`p2 discount: ${p2.getDiscount()}%`);
console.log(`p3 discount: ${p3.getDiscount()}%`);

console.log("\nDeleting p2 here");
p2 = null; 

console.log("\nAfter deletion:");

console.log(`p1 discount: ${p1.getDiscount()}%`);
console.log(`p3 discount: ${p3.getDiscount()}%`);

try {
  console.log(`p2 discount: ${p2.getDiscount()}%`);
} catch (e) {
  console.log("Cannot access getDiscount of null because p2 is deleted.");
}