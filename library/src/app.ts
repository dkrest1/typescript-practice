import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { Product } from "../src/product.model";
import { validate } from "class-validator";

const products = [
  { title: "kettle", price: 121 },
  { title: "a book", price: 12.0 },
];

// const convertedtoTSProduct = products.map((prod) => {
//   return new Product(prod.title, prod.price);
// });

const newProd = new Product("", -5.99);
validate(newProd).then((error) => {
  if (error.length > 0) {
    console.log("validation error");
    console.log(error);
  } else {
    console.log(newProd.getInformation());
  }
});

const convertedtoTSProduct = plainToClass(Product, products);
for (const prod of convertedtoTSProduct) {
  console.log(prod.getInformation());
}
