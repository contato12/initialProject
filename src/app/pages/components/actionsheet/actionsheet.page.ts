import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActionSheetController, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-actionsheet',
  templateUrl: './actionsheet.page.html',
  styleUrls: ['./actionsheet.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ActionsheetPage implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  async actionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'albums',
      mode: 'ios',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete Clicked');
          }
        },
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share Clicked');
          }
        },
        {
          text: 'Play',
          icon: 'play-circle',
          handler: () => {
            console.log('Play Clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }
}
