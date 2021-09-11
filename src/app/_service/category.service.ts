import {EntityService} from "./base/entity.service";
import {Category} from "../_model/category";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class CategoryService extends EntityService<Category> {
  constructor(protected http: HttpClient) {
    super(http, "/categories.json");
  }
}
