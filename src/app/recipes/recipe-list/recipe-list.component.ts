import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test recipe', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.bonappetit.com%2Fphotos%2F5d7296eec4af4d0008ad1263%2F16%3A9%2Fw_2560%252Cc_limit%2FBasically-Gojuchang-Chicken-Recipe-Wide.jpg&f=1&nofb=1&ipt=a1dfe0dc70b478dbacd143aed86fddf90318d5b7fdb60e17a8b3cc920c4b6b86&ipo=images'),
    new Recipe('A test recipe 2', 'This is a test recipe', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.bonappetit.com%2Fphotos%2F5d7296eec4af4d0008ad1263%2F16%3A9%2Fw_2560%252Cc_limit%2FBasically-Gojuchang-Chicken-Recipe-Wide.jpg&f=1&nofb=1&ipt=a1dfe0dc70b478dbacd143aed86fddf90318d5b7fdb60e17a8b3cc920c4b6b86&ipo=images')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
