import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup; 

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar ){
   this.form = this.fb.group({
    user:['', Validators.required],
    password:['', Validators.required],

   })
  }

  ngOnInit(): void{}

  Ingresar(){
   
    const user = this.form.value.user;
    const password = this.form.value.password;

   if(user == "mateo " && password =="mateo"){

   }else{
    this.error();

   }
  }
  error(){
    this._snackBar.open('usuario o contraseña ingresados son invalidos', '',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }
}
