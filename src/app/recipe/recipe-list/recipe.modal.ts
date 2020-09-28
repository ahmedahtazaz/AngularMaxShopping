import { Ingredient } from 'src/app/shared/ingredient.modal';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, imagePth: string, ingredients: Ingredient[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePth;
        this.ingredients = ingredients;
    }
}