import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  myForm: FormGroup;
  
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder
  ) {
    this.myForm = this.createMyForm();
  }

  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Registered',
      subTitle: 'You are a padawan',
      buttons: ['Ok']
    });
    alert.present();
  }
  
  login(){
    console.log(this.myForm.value);
    this.doAlert();
  }
  
  private createMyForm(){
    return this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}

