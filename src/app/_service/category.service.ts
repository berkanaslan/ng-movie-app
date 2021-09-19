import {EntityService} from "./base/entity.service";
import {Category} from "../_model/category";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class CategoryService extends EntityService<Category> {

  constructor(protected http: HttpClient) {
    super(http, "/categories.json");
  }

  getAllCategories(): Observable<Category[]> {
    return this.getAll().pipe(map(data => {
      const categories: Category[] = [];

      for (const key in data)
        categories.push({...data[key], id: key});

      return categories;
    }));
  }
}
