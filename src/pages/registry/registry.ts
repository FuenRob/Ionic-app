import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-registry',
  templateUrl: 'registry.html'
})
export class RegistryPage {

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
  
  saveData(){
    console.log(this.myForm.value);
    this.doAlert();
  }
  
  private createMyForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      dateBirth: ['', Validators.required],
      passwordRetry: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      }),
      gender: ['', Validators.required],
    });
  }
}

