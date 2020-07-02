import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { IonicModule } from '@ionic/angular';

import { NewOffersPageRoutingModule } from './new-offers-routing.module';

import { NewOffersPage } from './new-offers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewOffersPageRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  declarations: [NewOffersPage]
})
export class NewOffersPageModule {}
