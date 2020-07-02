import { BookingsComponent } from '../about/bookings/bookings.component';
import { PlacesService } from './../places.service';
import { Places } from './../../Models/dummy-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit{
  loaded = false ;
  public place: Places;
  id: string;
  title="not Found"
  constructor(private placeservice: PlacesService ,
     private active: ActivatedRoute ,
      private router: Router ,
       private navctrl:NavController,
       private modelctrl:ModalController) { }

  ngOnInit() {
    // this.place=this.placeservice.get_for_about('5e99d20b3ecc2229acefcd71');
    this.active.paramMap
    .subscribe(url => {
      if(!url.has('_id')){
        this.router.navigate(['/places/offers'])
      }
      else{
        this.id = url.get('_id');
        this.place = this.placeservice.get_for_about(this.id);
        if(!this.place){
          this.loaded = false;
          this.router.navigate(['/places/offers'])
        }
        console.log(this.place)
        // this.title=this.place.title;
        this.loaded = true;
        // console.log(this.place);
      }
    });
  }
    book(){
      this.modelctrl.create(
        {component: BookingsComponent,
          componentProps: { selectedplace: this.place}
      }).then(modelEl => modelEl.present());
    }


  
}

