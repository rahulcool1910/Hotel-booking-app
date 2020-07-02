import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlacesService } from './../places/places.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  Option: string = 'login';
  form: FormGroup;
  image: any;
  constructor(private placeservice: PlacesService, private router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8)],
      }),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(4)],
      }),
    });
    this.placeservice.gettoken();
  }
  change(eve: any) {
    console.log(eve.detail);
    this.Option = eve.detail.value;
  }

  authenticate() {
    if (this.form.invalid) {
      return;
    }
    this.placeservice.login(this.form.value);
  }
}
