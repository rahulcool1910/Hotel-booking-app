import { BookingsComponent } from '../about/bookings/bookings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import { IonicModule } from '@ionic/angular';
import {MatInputModule} from '@angular/material/input'
import {ReactiveFormsModule} from '@angular/forms'
import { AboutPageRoutingModule } from './about-routing.module';
import {MatCardModule} from '@angular/material/card'
import { AboutPage } from './about.page';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    AboutPageRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  declarations: [AboutPage, BookingsComponent],
  entryComponents: [BookingsComponent]
})
export class AboutPageModule {}
