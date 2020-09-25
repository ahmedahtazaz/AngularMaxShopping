import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showRecipe: boolean = false;
  showShppingList: boolean = false;

  onRecipesClick = () => {
    this.showRecipe = true;
    this.showShppingList = false;
  }

  onShoppingListClick = () => {
    this.showRecipe = false;
    this.showShppingList = true;
  }
}
