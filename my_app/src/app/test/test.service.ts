import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { auth } from 'firebase/app';
import { Observable, of } from 'rxjs';
import { flatMap, map, switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from './test/test.model';
@Injectable({
  providedIn: 'root',
})
export class TestService {
  users: Observable<User>;
  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    this.afs
      .doc('users/fin6wLZlrXMeYCuIf7dCD10X7C82/bookings/SqWbFf37hidbfmSIaJtT')
      .delete();
    this.users = this.afAuth.authState.pipe(
      switchMap((user) => {
        // Logged in
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    );
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
    console.table(data);
    this.afs.collection(`users/${user.uid}/bookings`).add({ name: 'rahul' });

    return userRef.set(data, { merge: true });
  }
  get_trains() {
    this.afs
      .collection('Trains', (ref) =>
        ref.where('from_city', '==', 'chennai').limit(10)
      )
      .snapshotChanges()
      .pipe(flatMap((a) => a))
      .subscribe((data) => {
        console.log(data);
      });
  }
  async googleSignin() {
    const providers = new firebase.auth.GoogleAuthProvider();
    const popup = await this.afAuth.signInWithPopup(providers);
    this.updateUserData(popup.user);
  }
  async signOut() {
    await this.afAuth.signOut();
    // this.router.navigate(['/']);
  }
}
