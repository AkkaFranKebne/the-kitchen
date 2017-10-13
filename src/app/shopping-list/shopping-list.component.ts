import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[] = [
        new Ingredient('eggs', 5),
        new Ingredient('flour', 200),
        new Ingredient('chocolate', 1),
        new Ingredient('vanilla', 1),
        new Ingredient('butter', 250),
        new Ingredient('raisins', 30),
        new Ingredient('sugar', 500),
        new Ingredient('milk', 500)     
    ];
    
    
  constructor() { }

  ngOnInit() {
  }

}
