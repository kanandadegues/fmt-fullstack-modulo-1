import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { LocalStorageService } from '../service/local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class AcessoGuard implements CanActivate {
  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
    ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree { 
      if(!this.localStorageService.usuarioConectado())
        this.router.navigate(["sem-acesso"])
      return true;
  }
  
}
