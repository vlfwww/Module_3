class Product {
  // static ProductsDiscount = new WeakMap();
  static ProductsDiscount = new Map();

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  static setDiscount(product, discount) {
    Product.ProductsDiscount.set(product, discount);
  }

  static getDiscount(product) {
    return Product.ProductsDiscount.get(product) || 0;
  }
  
}

let p1 = new Product("Apple", 100);
let p2 = new Product("Orange", 150);
let p3 = new Product("Banana", 80);

Product.setDiscount(p1, 10);
Product.setDiscount(p2, 15);
Product.setDiscount(p3, 5);

console.log("Before deletion:");

console.log(`p1 discount: ${Product.getDiscount(p1)}%`);
console.log(`p2 discount: ${Product.getDiscount(p2)}%`);
console.log(`p3 discount: ${Product.getDiscount(p3)}%`);

console.log("\nStorage before deletion:");
for (const [product, discount] of Product.ProductsDiscount) {
  console.log(`${product.name}: ${discount}%`);
}

console.log("\nDeleting p2 here");
// p2 = null;
Product.ProductsDiscount.delete(p2);

console.log("\nAfter deletion:");

console.log(`p1 discount: ${Product.getDiscount(p1)}%`);
console.log(`p2 discount: ${Product.getDiscount(p2)}%`);
console.log(`p3 discount: ${Product.getDiscount(p3)}%`);

console.log("\nStorage after deletion:");
for (const [product, discount] of Product.ProductsDiscount) {
  console.log(`${product.name}: ${discount}%`);
}