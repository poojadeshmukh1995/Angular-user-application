import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
   selector: 'app-add-user',
   templateUrl: './add-user.component.html',
   styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
   toppings = new FormControl();
   toppingList: string[] = ['English', 'Hindi', 'Marathi', 'French', 'Latin', 'Spanish'];;
   @Output() newUserData = new EventEmitter();
   userForm = new FormGroup({
      fullName: new FormControl(''),
      dob: new FormControl(''),
      languages: new FormControl(),
      gender: new FormControl(''),
      about: new FormControl(''),
   });
   constructor() { }

   ngOnInit() {
   }
   onSubmit() {
      this.newUserData.emit(this.userForm.value);
      this.userForm.reset();
   }

}
