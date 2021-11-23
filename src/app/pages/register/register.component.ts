import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from 'src/app/models/user';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  formularioRegistro = new FormGroup({
    fullName : new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', Validators.required),
    address : new FormControl('', Validators.required),
    cellPhone : new FormControl('', Validators.required)
  })


  constructor( private signupservice:SignupService) { }

  user1:User = {
    fullName: this.formularioRegistro.value.fullName,
    email: this.formularioRegistro.value.email,
    password: this.formularioRegistro.value.password,
    address: this.formularioRegistro.value.address,
    cellPhone: this.formularioRegistro.value.cellPhone
  }

  ngOnInit(): void {
  }
// Inicio de Función Validador Email
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Debe ingresar un Email válido';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
// Fin de Función Validador Email

  registrarUser():void{
    this.user1 = this.formularioRegistro.value;
    console.log(this.user1)
    this.signupservice.save(this.user1).subscribe( resp => {
      console.log(resp)
    });
    this.formularioRegistro.reset()
  }
  
}
