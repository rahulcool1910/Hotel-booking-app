import { PlacesService } from './../places.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {mimeType} from '../about/bookings/mimetype'

@Component({
  selector: 'app-new-offers',
  templateUrl: './new-offers.page.html',
  styleUrls: ['./new-offers.page.scss'],
})
export class NewOffersPage implements OnInit {
  from: any;
  form: FormGroup;
  imageurl1:any

  constructor(private placeservice: PlacesService) { }

  ngOnInit() {
    // this.from = new Date(Date.now());
    // let date = new Date()
    // this.from= (date.getFullYear() + '-' ++date.getMonth() + '-' + date.getDate()).toString();
    // console.log(this.from)
    this.form = new FormGroup({
      title:new FormControl(null, {validators:[Validators.required,Validators.minLength(8)]}),
      description:new FormControl(null, {validators:[Validators.required,Validators.minLength(10)]}),
      price:new FormControl(null,{validators:[Validators.required]}),
      AvailableFrom:new FormControl(null, {validators:[Validators.required]}),
      AvailableTo:new FormControl(null, {validators:[Validators.required]}),
      imageurl:new FormControl(null, {validators:[Validators.required],asyncValidators:[mimeType]}),
      Creator_id:new FormControl(null,{validators:[Validators.required]})
    })

    this.form.patchValue({Creator_id:localStorage.getItem('_id')});
    this.form.get('Creator_id').updateValueAndValidity();
  }


  image(event:Event){
    let file=((event.target as HTMLInputElement).files[0])
    this.form.patchValue({imageurl: file})
    this.form.get('imageurl').updateValueAndValidity()
    let reader=new FileReader();
    reader.onload=()=>{
      this.imageurl1=reader.result
    }
    reader.readAsDataURL(file)
  }

  submit_offers(){
    if(this.form.invalid){
      return
    }
    this.placeservice.newoffers(this.form);
    // this.form.reset();

  }

}
