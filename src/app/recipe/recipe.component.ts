import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from './recipe-list/recipe.modal';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit, OnDestroy {

  selectedRecipe: Recipe;
  rSSubscription: Subscription;

  constructor(private recipeService: RecipeService) { }

  ngOnDestroy(): void {
    this.rSSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.rSSubscription = this.recipeService.recipeSelected.subscribe(
      recipe => {
        this.selectedRecipe = recipe;
      }
    );
  }

}
