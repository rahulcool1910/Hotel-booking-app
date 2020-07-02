import { PlacesService } from './../places/places.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private placeservice: PlacesService ,private router: Router) {}
  status:boolean = false
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    // this.placeservice.login_status()
    //   .subscribe(_status=>{
    //     this.status=_status;
    //     console.log(this.status)
    //   })
      this.status=this.placeservice.tokenisthere()
      this.placeservice.tokenstatus().subscribe(result=>{
        console.log(result)
      })
  
    // if(!this.status){
    //   this.router.navigate(['/auth'])
    // }
    // else{
    //   return true;
    // }
    return true;
  }
}
