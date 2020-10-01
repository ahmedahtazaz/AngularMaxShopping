import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.modal';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  recipe: Recipe;
  editMode: boolean = false;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      params => {
        
        this.editMode = params['id'] ? true : false;

        if(this.editMode)
        {
          this.id = params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      }
    );
  }

}
