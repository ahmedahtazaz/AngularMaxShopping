import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.modal';
import { Recipe } from './recipe-list/recipe.modal';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [ new Recipe('Test Recipe', 'My Test Recipe', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg', [new Ingredient('burger', 5), new Ingredient('banana', 10)]),
                        new Recipe('Another Test Recipe', 'Another My Test Recipe', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg', [new Ingredient('toffee', 10), new Ingredient('apple', 25)])];

  recipeSelected = new Subject<Recipe>();

  constructor() { }

  getRecipes = () => this.recipes.slice();

  getRecipe = id => this.recipes[id];
}
