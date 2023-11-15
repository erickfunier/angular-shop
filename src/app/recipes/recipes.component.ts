import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  selectedRecipe: Recipe;
  @Output() selectedRecipeEvent: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  onSelected(recipe: Recipe) {
    this.selectedRecipeEvent.emit(recipe);
  }


}
