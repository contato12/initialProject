import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async acionar() {
    let alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is a alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async acionar1() {
    let alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is a alert message.',
      buttons: ['OK', 'Save', 'Delete']
    });

    await alert.present();
  }

  async acionar2() {
    let alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      header: 'Confirm!',
      message: 'Do you want to delete?',
      buttons: [
        'Yes',
        'No'
      ]
    });

    await alert.present();
  }

  async acionar3() {
    let alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is a alert message.',
      inputs: [
        {
          name: 'e-mail',
          type: 'email',
          placeholder: 'Digite o seu e-mail.'
        },

        {
          name: 'senha',
          type: 'password',
          placeholder: 'Digite o sua senha.'
        }
      ],
      buttons: ['Confirm']
    });

    await alert.present();
  }




}
