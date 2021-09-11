import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../_service/category.service";
import {Category} from "../../_model/category";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

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

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  onCategorySelected(category?: Category) {
    if (category != null) {
      this.selectedCategory = category;
      this.displayAll = false;
    } else {
      this.selectedCategory = null;
      this.displayAll = true;
    }
  }

  private getAllCategories(): Observable<Category[]> {
    return this.categoryService.getAll().pipe(map(data => {
      const categories: Category[] = [];

      for (const key in data)
        categories.push({...data[key], id: key});

      return categories;
    }));
  }

}
