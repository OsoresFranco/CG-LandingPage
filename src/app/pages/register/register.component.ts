import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

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
