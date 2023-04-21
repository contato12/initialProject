import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.page.html',
  styleUrls: ['./javascript.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class JavascriptPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
