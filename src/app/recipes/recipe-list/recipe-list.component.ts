import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [  //array of recipes (see recipe.model.ts)
        new Recipe('Yummy Chocolate Cookies', 'Gummi bears liquorice apple pie cake biscuit sweet apple pie. Sweet roll jujubes jujubes sugar plum gummi bears lollipop sweet. Gummies pie cheesecake halvah dessert.', 'https://sugarspunrun.com/wp-content/uploads/2017/05/Chocolate-Chip-Cookie-Recipe-1-of-1.jpg'),     //calls the constructor in Recipe class
        new Recipe('Smooth Brownie Cupcakes', 'Gingerbread caramels biscuit toffee. Icing sweet topping. Pie chocolate cake wafer dessert lollipop. Icing ice cream pie bonbon cake muffin toffee brownie cupcake.', 'http://img.taste.com.au/wJW2WMnE/taste/2016/11/chocolate-cupcakes-70267-1.jpeg')
     ];


  ngOnInit() {
  }

}
