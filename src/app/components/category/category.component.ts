import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../_service/category.service";
import {Category} from "../../_model/category";
import {Router} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  selectedCategory: Category = null;
  displayAll: boolean = true;

  constructor(private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  onCategorySelected(category?: Category) {
    if (category != null) {
      this.selectedCategory = category;
      this.displayAll = false;
      this.router.navigate(["/movies/category", category.id]);
    } else {
      this.selectedCategory = null;
      this.displayAll = true;
      this.router.navigate(["/movies"]);
    }
  }

}
