import { Bookings } from './../Models/bookings';
import { PlacesService } from './../places/places.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {
  form: FormGroup;
  bookings: Bookings[]=[];
  constructor(private Placeservice:PlacesService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, { updateOn: 'blur', validators: [Validators.required, Validators.minLength(8)]})
    });
    this.Placeservice.get_bookings()
    this.Placeservice.get_booking_sub()
      .subscribe(booking=>{
        this.bookings=booking;
        console.log(this.bookings);
      })
      
  }

  onSubmit(){
    console.log(this.form)
  }

}
