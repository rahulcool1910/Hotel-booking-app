import { PlacesService } from './../places.service';
import { Places } from './../../Models/dummy-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  loadedplace:Places[]
  datapresent=0;
  constructor(private placeservice: PlacesService) { }

  ngOnInit() {
    this.placeservice.getdata()
    this.placeservice.getdatasub()
      .subscribe(data=>{
        this.loadedplace=data;
        this.datapresent=1;
      })
  
   
  }

}
