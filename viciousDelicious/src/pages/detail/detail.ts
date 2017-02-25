import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {InstructionPage} from "../instruction/instruction";

/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  recipeInfo=this.navParams.get("param1");

  GoToInstructions(recipe){
    this.navCtrl.push(InstructionPage,{param1:recipe});

  }


}
