import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-list/recipe.modal';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipeDetail: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
