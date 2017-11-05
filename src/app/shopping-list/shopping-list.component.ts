import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[]; // see shopping-list.service


  constructor(private shoppingListService: ShoppingListService ) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getShoppingList();  // displays all shopping list from shopping list service
    this.shoppingListService.ingredientsChanged.subscribe(   //  listens to the changes in shopping list in shopping list service
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });

  }


}
