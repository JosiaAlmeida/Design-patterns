import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./meal-box";
import { Beans, Dessert, Meat, Rice } from "./meals";

export class MainDishBuilder implements MealBuilderProtocol {
    private _meal: MealBox = new MealBox()

    reset(): this {
        this._meal == new MealBox()
        return this
    }

    mekeMeal(): this {
        const rice = new Rice('Arroz', 10);
        const beans = new Beans("Feijao", 5)
        const meat = new Meat("Carne", 20)
        this._meal.add(rice, beans, meat)
        return this
    }
    makeBeverage(): this {
        const beans = new Beans("Feijao", 5)
        this._meal.add(beans)
        return this
    }
    makeDessert(): this {
        const dessert = new Dessert("Feijao", 5)
        this._meal.add(dessert)
        return this
    }

    getMeal(): MealBox {
        // this.reset()
        return this._meal
    }

}