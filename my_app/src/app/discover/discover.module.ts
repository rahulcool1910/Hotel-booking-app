import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'
import { DiscoverPageRoutingModule } from './discover-routing.module';

import { DiscoverPage } from './discover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatButtonModule,
    MatCardModule,
    DiscoverPageRoutingModule
  ],
  declarations: [DiscoverPage]
})
export class DiscoverPageModule {}
