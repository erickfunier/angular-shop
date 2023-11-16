import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';
  @Output() selectedRecipeEvent = new EventEmitter<Recipe>();
  selectedRecipe: Recipe = undefined;
  @Input() recipe: Recipe;
  
  
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe = undefined;
    this.selectedRecipe = recipe;
    //this.selectedRecipeEvent.emit(recipe);
    console.log(recipe);
  }


}
