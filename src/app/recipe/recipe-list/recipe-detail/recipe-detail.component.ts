import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input('recipe') recipe: Recipe;
  
  constructor(private shopingListSerice: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList = () => {
    this.shopingListSerice.addIngredients(this.recipe.ingredients);
  }

}
