import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [ new Recipe('Test Recipe', 'My Test Recipe', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
                        new Recipe('Another Test Recipe', 'Another My Test Recipe', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')];

  @Output('onRecipeDetailReceived') recipeDetail = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeDetailReceived = (recipe: Recipe) => {
    this.recipeDetail.emit(recipe);
  }

}
