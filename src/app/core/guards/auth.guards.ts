import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AuthService} from "../../_service/auth.service";
import {map, tap} from "rxjs/operators";

@Injectable({providedIn: "root"})
export class AuthGuards implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.user.pipe(
      map(user => !!user),
      tap(isAuthenticated => {
        if (!isAuthenticated)
          this.router.navigate(["/auth"]);
      }),
    );
  }
}
