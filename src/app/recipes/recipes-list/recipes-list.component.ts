import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Gulab Jamun', 'Delicious Indian Sweet', 'http://www.ruchiskitchen.com/wp-content/uploads/2015/02/gulab-jamun-pic.jpg'),
    new Recipe('Matar Paneer', 'Delicious Indian Gravy', 'http://media3.sailusfood.com/wp-content/uploads/2010/04/matar-paneer.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
