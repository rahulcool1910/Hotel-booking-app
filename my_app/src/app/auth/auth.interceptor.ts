import { PlacesService } from './../places/places.service';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token: string;
  constructor(private placeservice: PlacesService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.token = this.placeservice.gettokenforintercept();
    this.placeservice.tokenstatus().subscribe((token) => {
      this.token = token;
    });
    const newreq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + this.token),
    });

    return next.handle(newreq);
  }
}
