import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('recipe') recipe: Recipe;
  @Input('id') id: number;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onRecipeClick = () => {
    this.recipeService.recipeSelected.next(this.recipe);
  }

}
