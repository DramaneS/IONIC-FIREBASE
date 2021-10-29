import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.page.html',
  styleUrls: ['./utilisateur.page.scss'],
})
export class UtilisateurPage implements OnInit {
userDetail: string;
itemsCollect: AngularFirestoreCollection;
items: Observable<any[]>;

  constructor(
    private router: Router,
    private authService: AuthService,
    private firestore: AngularFirestore) { }

  ngOnInit() {
    this.getData();
  }

    async getData(){
    this.itemsCollect = this.firestore.collection('user'); //donnee la collection user à itemCollect
    this.items = this.itemsCollect.valueChanges();
    console.log(this.items);
  }
  
}