import {Injectable} from "@angular/core";
import {EntityService} from "./base/entity.service";
import {AuthRequest, AuthResponse, User} from "../_model/user";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {FirebaseConstants} from "../core/constants/firebase.constants";
import {tap} from "rxjs/operators";
import {USER_STORAGE_KEY} from "../core/constants/app.constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends EntityService<User> {
  user = new BehaviorSubject<User>(null);

  constructor(protected http: HttpClient) {
    super(http, "");
  }

  tryAuth(authRequest: AuthRequest, isLoginMode: boolean): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(isLoginMode ? FirebaseConstants.SIGN_IN_URL : FirebaseConstants.SIGN_UP_URL, authRequest).pipe(
      tap(response => {
        const expirationDate = new Date(new Date().getTime() + (+response.expiresIn * 1000));

        this.user.next(new User(
          response.email,
          response.localId,
          response.idToken,
          expirationDate
        ));
      }),
    );
  }

  getUserFromLocalStorage(): void {
    const user: User = JSON.parse(localStorage.getItem(USER_STORAGE_KEY));

    if (!user)
      return;

    this.user.next(user);
  }

  logout(): void {
    localStorage.removeItem(USER_STORAGE_KEY);
    this.user.next(null);
  }
}
