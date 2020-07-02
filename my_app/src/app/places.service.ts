import { Places } from 'src/app/Models/dummy-model';
import { Bookings } from './../Models/bookings';
// import { Places } from './../Models/dummy-model';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  placedata: Places[] = [];
  placedatasub = new Subject<Places[]>();
  private bookings: Bookings[] = [];
  offered_places: Places[] = [];
  offeredplacesub = new Subject<Places[]>();

  private loginsub = new Subject<boolean>();
  private _login_status: boolean = false;
  private tokensub = new Subject<string>();
  private token: string;
  private expiresIn: any;
  private _id: string;
  private booking_sub = new Subject<Bookings[]>();
  constructor(
    private router: Router,
    private navctrl: NavController,
    private http: HttpClient
  ) {}

  get_for_about(id) {
    let place = this.placedata.find((m) => m._id === id);
    return place;
  }

  getdata() {
    this.http
      .get<Places[]>('http://localhost:3000/offers/?limit=2')
      .subscribe((result) => {
        this.placedata = result;
        this.placedatasub.next(this.placedata);
        console.log(this.placedata);
      });
  }

  getdatasub() {
    return this.placedatasub.asObservable();
  }

  // login_status(){
  //   return this.loginsub.asObservable();
  // }

  tokenstatus() {
    return this.tokensub.asObservable();
  }
  tokenisthere() {
    if (this.token) {
      return true;
    } else {
      return false;
    }
  }

  login(form) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'Application/json');
    this.http
      .post('http://localhost:3000/auth/login', form, { headers: header })
      .subscribe((result) => {
        this.savetoken(result);
        this._login_status = true;
        this.loginsub.next(this._login_status);
        this.router.navigate(['/places']);
      });
  }

  logout() {
    this._login_status = false;
    this.loginsub.next(this._login_status);
    localStorage.removeItem('token');
    localStorage.removeItem('_id');
    localStorage.removeItem('expiresIn');
    this.navctrl.navigateBack(['/auth']);
  }

  savetoken(result) {
    let now = new Date();
    let expiresIn = new Date(now.getTime() + result['expiresIn'] * 1000);
    console.log(expiresIn);
    localStorage.setItem('token', result.token);
    this.token = result.token;
    this.navctrl.navigateForward(['/places']);
    this.tokensub.next(result.token);
    localStorage.setItem('expiresIn', expiresIn.toISOString());
    localStorage.setItem('_id', result._id);
    this._id = result._id;
  }

  gettokenforintercept() {
    this.token = localStorage.getItem('token');
    return this.token;
  }
  gettoken() {
    this.token = localStorage.getItem('token');
    this.expiresIn = localStorage.getItem('expiresIn');
    let date = new Date().getTime();
    this._id = localStorage.getItem('_id');
    let time_left = new Date(this.expiresIn).getTime() - date;
    //console.log(this.expiresIn.getTime(),new Date(now.getTime()),localStorage.getItem('expiresIn'),date)
    if (time_left < 0) {
      console.log('yes');
      this.token = null;
      this.logout();
    } else {
      this._login_status = true;
      this.tokensub.next(this.token);
      setTimeout(() => {
        this.navctrl.navigateForward(['/places/offers']);
        console.log('no');
      }, 2000);
    }
  }

  book_place(Booking_data) {
    const data = new FormData();
    data.append('name', Booking_data.name);
    data.append('from', Booking_data.from);
    data.append('to', Booking_data.to);
    data.append('image', Booking_data.image);
    data.append('UserID', localStorage.getItem('_id'));
    data.append('hotel_id', Booking_data.hotel_id);
    console.log(data);
    const header = new HttpHeaders();
    header.append('Content-Type', 'Application/json');
    this.http
      .post<Bookings>('http://localhost:3000/booking/post', data, {
        headers: header,
      })
      .subscribe((result) => {
        this.bookings.push(result);
        this.booking_sub.next(this.bookings);
      });
  }

  get_bookings() {
    this.http
      .get<Bookings[]>(
        'http://localhost:3000/booking/get/' + localStorage.getItem('_id')
      )
      .subscribe((data) => {
        this.bookings = data;
        console.log(this.bookings);
        this.booking_sub.next(this.bookings);
      });
  }

  get_booking_sub() {
    return this.booking_sub.asObservable();
  }

  newoffers(form) {
    const data = new FormData();
    data.append('title', form.value.title);
    data.append('description', form.value.description);
    data.append('AvailableFrom', form.value.AvailableFrom);
    data.append('AvailableTo', form.value.AvailableTo);
    data.append('imageurl', form.value.imageurl);
    data.append('price', form.value.price);
    data.append('Creator_id', localStorage.getItem('_id'));
    console.log(form);
    const header = new HttpHeaders();
    header.append('Content-Type', 'Application/json');
    this.http
      .post<Places>('http://localhost:3000/new/new-offers', data, {
        headers: header,
      })
      .subscribe((data) => {
        // this.placedatasub.next(data);
        this.placedata.push(data);
        this.placedatasub.next(this.placedata);
        console.log(data);
        this.navctrl.navigateForward(['/places/offers']);
      });
  }

  get_offered_places() {
    // let Header=new HttpHeaders()
    // Header.append('Content-Type','Application/json');
    this.http
      .get<Places[]>(
        'http://localhost:3000/new/about/' + localStorage.getItem('_id')
      )
      .subscribe((data) => {
        this.offeredplacesub.next(data);
      });
  }

  sub() {
    return this.offeredplacesub.asObservable();
  }
}
