import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from '../auth.service';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  userForm: FormGroup;
  successMsg: string = '';
  errorMsg: string = '';
  error_msg = {
    'email': [
      { 
        type: 'required', 
        message: 'Provide email.' 
      },
      { 
        type: 'pattern', 
        message: 'Email is not valid.' 
      }
    ],
    'password': [
      { 
        type: 'required', 
        message: 'Password is required.' 
      },
      { 
        type: 'minlength', 
        message: 'Password length should be 6 characters long.' 
      }
    ]
  };
  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private create: AngularFirestore
  ) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

  // connexion(value) {
  //   this.authService.createUser(value)
  //     .then((response) => {
        
  //       this.errorMsg = "";
  //       this.successMsg = "Nouveau utilisateur creer";
  //     }, error => {
  //       this.errorMsg = error.message;
  //       this.successMsg = "";
  //     })
  // }
  register(data){
    try {
      this.authService.createUser(data.value.email, data.value.password).then( response =>{
          // console.log(response);
                  this.successMsg = "Nouveau utilisateur creer";

          this.create.collection('user').doc(response.user.uid).set({
            userName: data.value.nom,
            phone: data.value.phone,
            userEmail: data.value.email,
            userPassword: data.value.password,
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  goToLogin() {
    this.router.navigateByUrl('login');
  }


  
}