import {Ingredient} from "../shared/ingredient.model";

export class Recipe {   // a model for every instance of recipe, recipes itself collected in recipes.service
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, description: string, imagePath: string, ingredients: Ingredient[]){
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredients = ingredients;
    }
}
