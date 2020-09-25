import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input('recipe') recipe: Recipe;
  @Output('onRecipeDetailReceived') recipeClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClick = () => {
    this.recipeClick.emit();
  }

}
