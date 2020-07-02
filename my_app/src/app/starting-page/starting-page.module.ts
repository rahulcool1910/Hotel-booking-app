import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartingPagePageRoutingModule } from './starting-page-routing.module';

import { StartingPagePage } from './starting-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartingPagePageRoutingModule,
    MatButtonModule,
    MatCardModule,
  ],
  declarations: [StartingPagePage]
})
export class StartingPagePageModule {}
