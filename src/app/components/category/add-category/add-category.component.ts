import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../_service/category.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../../_model/category";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
  providers: [CategoryService]
})
export class AddCategoryComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    categoryNameController: new FormControl("", [Validators.required]),
  });

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
  }

  saveCategory() {
    const category: Category = {
      name: this.formGroup.value.categoryNameController
    };

    this.categoryService.save(category).subscribe();
  }

}
