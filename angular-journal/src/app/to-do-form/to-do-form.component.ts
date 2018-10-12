import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ToDoForm } from '../forms/to-do.form';
import { Activity } from '../models/activity';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {
  
  toDoForm: FormGroup;

  activity: Activity;

  constructor() { }

  ngOnInit() {
    this.toDoForm = ToDoForm.build(); 
  }

  saveActivity() {
    console.log('toDoForm ', this.toDoForm);
    console.log('toDoFormValue ', this.toDoForm.value);
    console.log('Activity name: ', this.toDoForm.controls['name'].value);
    console.log('name Alternativa', this.toDoForm.get('name').value);

    this.activity = this.toDoForm.value;

    console.log('ACTIVITY IS: ', this.activity);
  }

}
