import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileForm } from '../forms/profile.form';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css']
})
export class ProfileFormComponent implements OnInit {

  profileForm: FormGroup;

  profile: Profile;
  
  constructor() { }

  ngOnInit() {
    this.profileForm = ProfileForm.build();

  }

  saveProfile() {
    console.log('profileForm ', this.profileForm);
    console.log('profileFormValue ', this.profileForm.value);
    console.log('firstName', this.profileForm.controls['fname'].value);
    console.log('firstName Alternativa', this.profileForm.get('fname').value);

    this.profile = this.profileForm.value;

    console.log('PROFILE IS: ', this.profile);
  }


    // fname = new FormControl('');

  // updateName() {
  //   this.fname.setValue(this.userInput);
  // }

  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  //   console.warn(this.profileForm.value);
  // }

  //isEditOrNew: boolean;

}
