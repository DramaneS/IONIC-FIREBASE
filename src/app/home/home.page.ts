import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
// user: any;
userDetail: string;
itemsCollect: AngularFirestoreCollection;
items: Observable<any[]>; 

  user: any;
  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
    private authService: AuthService,
    private router: Router
  ) {
    this.auth.authState.subscribe(auth =>{
      if(auth){
        this.firestore.collection('user').doc(auth.uid).valueChanges().subscribe(result => {
          this.user = result;
          console.log(this.user);
        });
      }
    });
  }



  ngOnInit() {
    this.authService.userDetails().subscribe(response => {
      if (response !== null) {
        this.userDetail = response.email;
      } else {
        this.router.navigateByUrl('');
      }
    }, error => {
      console.log(error);
    })
  }

  signOut() {
    this.authService.signoutUser()
      .then(res => {
        this.router.navigateByUrl('login');
      })
      .catch(error => {
        console.log(error);
      })
  }
}