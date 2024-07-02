import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  UrlSegment,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable, map, tap } from 'rxjs';

import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class PublicGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  private checkAuthStatus(): boolean | Observable<boolean> {
    return this.authService.checkAuthentication().pipe(
      tap((isAuthenticated) => console.log('Authenticated:', isAuthenticated)),
      tap((isAuthenticated) => {
        if (isAuthenticated) {
          this.router.navigate(['/']);
        }
      }),
      map( isAuthenticated => !isAuthenticated)
    );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    return this.checkAuthStatus();
  }
}
