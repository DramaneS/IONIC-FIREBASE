import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mdpoublier',
  templateUrl: './mdpoublier.page.html',
  styleUrls: ['./mdpoublier.page.scss'],
})
export class MdpoublierPage implements OnInit {

  constructor(public alertController: AlertController) { }
  async Alert(){
    const alert = await this.alertController.create({
      header: 'Envoyer',
      message:'Votre demande est bien prix en charge',
      buttons:['OK']
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    console.log(result);
  }

  ngOnInit() {
  }

}