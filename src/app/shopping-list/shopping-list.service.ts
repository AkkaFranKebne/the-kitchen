import { Ingredient } from '../shared/ingredient.model';
import {EventEmitter} from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();  // event on ingredients list

  private ingredients: Ingredient[] = [  // array of ingredients (see ingredient.model.ts), will be used in shoopinglist
    new Ingredient('eggs', 5),
    new Ingredient('flour', 200),
    new Ingredient('chocolate', 1),
    new Ingredient('vanilla', 1),
    new Ingredient('butter', 250),
    new Ingredient('raisins', 30),
    new Ingredient('sugar', 500),
    new Ingredient('milk', 500)
  ];

  getShoppingList(){
    return this.ingredients.slice();  // exact copy
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);  // function that add new ingredient to the list, it is initalized in shopping-list-edit
    this.ingredientsChanged.emit(this.ingredients.slice()); // push the info that the orginal ingredients array has changed
  }


}
