import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is a test',
      'https://www.washingtonpost.com/resizer/6mbSPgQOvUWRmmNnirvgvLzutio=/arc-anglerfish-washpost-prod-washpost/public/VA56ZXQQMUI63CHIYWG4HW5O4I.jpg'
    ),
    new Recipe(
      'A test Recipe',
      'This is a test',
      'https://www.washingtonpost.com/resizer/6mbSPgQOvUWRmmNnirvgvLzutio=/arc-anglerfish-washpost-prod-washpost/public/VA56ZXQQMUI63CHIYWG4HW5O4I.jpg'
    ),
  ];
}
