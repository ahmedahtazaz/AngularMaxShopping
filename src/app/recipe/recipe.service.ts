import { Injectable } from '@angular/core';
import { Recipe } from './recipe-list/recipe.modal';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [ new Recipe('Test Recipe', 'My Test Recipe', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
                        new Recipe('Another Test Recipe', 'Another My Test Recipe', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')];

  constructor() { }

  getRecipes = () => this.recipes.slice();
}
