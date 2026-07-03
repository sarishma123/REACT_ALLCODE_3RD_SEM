import { API_BASE_URL } from "./config";
import { formatCurrency } from "./utils";

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

function fetchProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        new Product("Phone", 699),
        new Product("Tablet", 499)
      ]);
    }, 1000);
  });
}

async function runApp() {
  try {
    console.log("API:", API_BASE_URL);

    const products = await fetchProducts();

    products.forEach((p) => {
      console.log(`${p.name} - ${formatCurrency(p.price)}`);
    });
  } catch (error) {
    console.log("Unable to load products");
  }
}

runApp();
