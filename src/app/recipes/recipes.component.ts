import { Component, OnInit } from '@angular/core';

import {Recipe} from "./recipe.model";
import {RecipeService} from "./recipes.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]   // recipes.service is registered here to be avaliable for all child components - same instance!
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {   // when the event from recipe-item is emitted this element listens to it and shows the proper recipe
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => { this.selectedRecipe = recipe});
  }


}
