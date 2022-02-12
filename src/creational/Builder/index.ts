import { MainDishBuilder } from "./classes/main-dish-builder";

const mainDishBuilder = new MainDishBuilder()

mainDishBuilder.makeDessert().makeBeverage()
console.log(mainDishBuilder.getMeal())