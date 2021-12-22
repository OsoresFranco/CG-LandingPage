import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from 'src/app/models/user';
import { SignupService } from 'src/app/services/signup.service';
import Swal from 'sweetalert2';
import { Router, Routes } from '@angular/router';

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


  constructor( private signupservice:SignupService, private route:Router) { }

  user1:User = {
    fullName: '',
    email: '',
    password: '',
    address: '',
    cellPhone: ''
  }

  ngOnInit(): void {
  }

  registrarUser():void{
    this.user1 = this.formularioRegistro.value;
    this.user1.cellPhone = String(this.user1.cellPhone);
    this.signupservice.save(this.user1).subscribe( resp => {
      Swal.fire(
        'Registro completado',
        'Serás redirigido a la pantalla principal',
        'success'
      )
      this.route.navigate(['/inicio'])
    }, (error) =>{
      Swal.fire(
        'Error en el registro',
        `Hubo un error al procesar su registro`,
        'error'
      )
    })
  }
  
}
