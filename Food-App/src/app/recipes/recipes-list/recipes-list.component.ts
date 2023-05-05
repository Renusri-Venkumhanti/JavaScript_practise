import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Cheese-Tortellini',
      'A creamy marinara sauce with goat cheese and basil.',
      'https://www.acouplecooks.com/wp-content/uploads/2021/03/Cheese-Tortellini-011.jpg'
    ),
    new Recipe(
      'Mushroom-Pasta',
      ' Its savory, buttery flavor pops with garlic, lemon',
      'https://www.acouplecooks.com/wp-content/uploads/2019/03/Mushroom-Pasta-007.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
}
