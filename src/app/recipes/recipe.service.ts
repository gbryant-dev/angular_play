import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '../../../node_modules/@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe ('Test Recipe',
      'This is a test',
      'https://www.maxpixel.net/static/photo/2x/Food-Kitchen-Meals-Home-Made-Dishes-Recipe-Bio-1175493.jpg',
      [
        new Ingredient('Salad', 1),
        new Ingredient ('Avocado', 1)
      ]
    ),
    new Recipe ('Another Recipe',
       'This is a test',
        'https://www.maxpixel.net/static/photo/2x/Food-Kitchen-Meals-Home-Made-Dishes-Recipe-Bio-1175493.jpg',
        [
          new Ingredient('Buns', 2),
          new Ingredient ('Seitan', 1)
        ]
      )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
