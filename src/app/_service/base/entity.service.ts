import {FirebaseConstants} from "../../core/constants/firebase.constants";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export class EntityService<T> {
  protected baseURL: string = FirebaseConstants.BASE_URL;

  constructor(protected http: HttpClient, path: string) {
    this.baseURL = this.baseURL + path;
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.baseURL);
  }

  getById(id: number): Observable<T> {
    return this.http.get<T>(this.baseURL + '/' + id);
  }

  save(entity: T): Observable<number> {
    return this.http.post<number>(this.baseURL, entity);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.baseURL + '/' + id);
  }
}
