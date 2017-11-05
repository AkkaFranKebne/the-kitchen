import {EventEmitter} from "@angular/core";

import { Recipe } from './recipe.model';
import { Ingredient} from "../shared/ingredient.model";

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();  // this part emit info about recipe

  private recipes: Recipe[] = [  // array of recipes (see recipe.model.ts), will be used in recipes and recipe-list
    new Recipe(
      'Yummy Chocolate Cookies',
      'Gummi bears liquorice apple pie cake biscuit sweet apple pie. Sweet roll jujubes jujubes sugar plum gummi bears lollipop sweet. Gummies pie cheesecake halvah dessert.',
      'https://sugarspunrun.com/wp-content/uploads/2017/05/Chocolate-Chip-Cookie-Recipe-1-of-1.jpg',
      [
        new Ingredient ('chocolate', 200),
        new Ingredient ('flour', 500),
        new Ingredient ('eggs', 4),
        new Ingredient ('cocoa powder', 200),
        new Ingredient ('sugar', 500),
        new Ingredient ('butter', 500)

      ]),     //calls the constructor in Recipe class
    new Recipe(
      'Smooth Brownie Cupcakes',
      'Gingerbread caramels biscuit toffee. Icing sweet topping. Pie chocolate cake wafer dessert lollipop. Icing ice cream pie bonbon cake muffin toffee brownie cupcake.',
      'http://img.taste.com.au/wJW2WMnE/taste/2016/11/chocolate-cupcakes-70267-1.jpeg',
      [
        new Ingredient ('chocolate', 100),
        new Ingredient ('flour', 300),
        new Ingredient ('eggs', 10),
        new Ingredient ('cocoa powder', 100),
        new Ingredient ('sugar', 400),
        new Ingredient ('oil', 300)
      ])
  ];

  getRecipes(){
    return this.recipes.slice();  // exact copy
  }



}
