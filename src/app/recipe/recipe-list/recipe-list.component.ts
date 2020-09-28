import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from './recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  @Output('onRecipeDetailReceived') recipeDetail = new EventEmitter<Recipe>();

  constructor(private recipeServvice: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeServvice.getRecipes();
  }

  onRecipeDetailReceived = (recipe: Recipe) => {
    this.recipeDetail.emit(recipe);
  }

}
