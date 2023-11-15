import { Component, Input } from '@angular/core';
import { Recipe } from './recipes/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';
  selectedRecipe: Recipe = undefined;
  @Input() recipe: Recipe;
  
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe = recipe;
    console.log(recipe);
  }


}
