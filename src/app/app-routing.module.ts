import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
{ path: 'recipes', component: RecipeComponent},
{ path: 'shopping-list', component: ShoppingListComponent},
{ path: '', redirectTo: '/recipes', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}