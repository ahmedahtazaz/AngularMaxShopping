import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipe/recipe-list/recipe-detail/recipe-detail.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
    {
        path: 'recipes',
        component: RecipeComponent,
        children: [
            { path: 'new', component: RecipeEditComponent},
            { path: ':id', component: RecipeDetailComponent},
            { path: ':id/edit', component: RecipeEditComponent}
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: '', redirectTo: '/recipes', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}