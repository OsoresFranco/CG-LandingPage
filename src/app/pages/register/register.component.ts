import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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


  constructor() { }

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
}
