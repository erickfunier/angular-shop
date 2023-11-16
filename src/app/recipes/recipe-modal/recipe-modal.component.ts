import { Component, Input, OnChanges } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-modal',
  templateUrl: './recipe-modal.component.html',
  styleUrl: './recipe-modal.component.css'
})
export class RecipeModalComponent implements OnChanges {
  _recipe: Recipe;
  @Input('recipe')
  set recipe(recipe: Recipe){
    this._recipe = recipe;
    $('#btnModal').trigger('click');
  }

  get recipe() {
    return this._recipe;
  }

   ngOnChanges() {
    //this.recipeInput = undefined;
    
   }

}
