import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-modal',
  templateUrl: './recipe-modal.component.html',
  styleUrl: './recipe-modal.component.css'
})
export class RecipeModalComponent {
  @Input() recipe: Recipe;
  @Input('openModal') openModal : boolean
  
}
