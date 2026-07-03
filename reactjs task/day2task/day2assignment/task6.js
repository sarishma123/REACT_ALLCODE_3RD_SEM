class FoodProduct extends Product {
  constructor(name, price, expiryDate) {
    super(name, price);
    this.expiryDate = expiryDate;
  }

  getInfo() {
    return `${this.name} costs ${this.price} and expires on ${this.expiryDate}`;
  }
}

const milk = new FoodProduct("Milk", 2.5, "2025-01-01");
console.log(milk.getInfo());
