class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getInfo() {
    return `${this.name} costs ${this.price}`;
  }
}

const product = new Product("Laptop", 1200);
console.log(product.getInfo());
