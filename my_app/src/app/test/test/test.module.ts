import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestPageRoutingModule } from './test-routing.module';

import { TestPage } from './test.page';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {
  AngularFirestoreModule,
  AngularFirestore,
} from '@angular/fire/firestore';
const config = {
  apiKey: 'AIzaSyD9ZSEgkb1s-J4N8TvnXZG_40Uclf3GxNo',
  authDomain: 'new-app-f4de0.firebaseapp.com',
  databaseURL: 'https://new-app-f4de0.firebaseio.com',
  projectId: 'new-app-f4de0',
  storageBucket: 'new-app-f4de0.appspot.com',
  messagingSenderId: '760497063554',
  appId: '1:760497063554:web:895398edc228c45099969b',
  measurementId: 'G-1C059FCC49',
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestPageRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],
  declarations: [TestPage],
  providers: [AngularFirestore],
})
export class TestPageModule {}
