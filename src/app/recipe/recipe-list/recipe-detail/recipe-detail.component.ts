import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;
  
  constructor(private shopingListSerice: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddToShoppingList = () => {
    this.shopingListSerice.addIngredients(this.recipe.ingredients);
  }

  onEditRecipe = () => {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
