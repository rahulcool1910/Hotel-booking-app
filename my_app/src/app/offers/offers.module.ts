import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OffersPageRoutingModule } from './offers-routing.module';
import { OffersPage } from './offers.page';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner"
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    OffersPageRoutingModule
  ],
  declarations: [OffersPage]
})
export class OffersPageModule {}
