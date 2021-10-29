import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFirestore} from "@angular/fire/compat/firestore"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) { }

  collections:any
  createUser(email, password) {
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth.createUserWithEmailAndPassword(email, password)
        .then(
          res => resolve(res),
          err => reject(err))
          
        }) 
  }

  signinUser(value) {
    return new Promise<any>((resolve, reject) => {
      this.angularFireAuth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err))
    })
  }

  signoutUser() {
    return new Promise<void>((resolve, reject) => {
      if (this.angularFireAuth.currentUser) {
        this.angularFireAuth.signOut()
          .then(() => {
            console.log("Sign out");
            resolve();
          }).catch(() => {
            reject();
          });
      }
    })
  }

  userDetails() {
    return this.angularFireAuth.user
  }  
  getUsers() {
    this.collections=this.firestore.collection('user');
    return this.collections.valueChanges();

  }
}
