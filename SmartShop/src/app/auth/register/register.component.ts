import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { AuthService } from './../services/auth.service';
import {Router} from '@angular/router';
import { User } from '../../models/user';
import { FirebaseServiceService } from '../../services/firebase-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'], 
  providers: [AuthService],
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    cedula: new FormControl(''),
    apellido: new FormControl(''),
    nombre: new FormControl(''),
    lat: new FormControl(''),
    lon: new FormControl(''),
    telefono: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })


  constructor(
    private autSvc:AuthService, 
    private router: Router,
    private firebaseServiceService: FirebaseServiceService
    ) { }

  ngOnInit(): void {
  }
  async onRegister(){

    const {email, password, cedula, apellido,
    nombre, lat, lon, telefono} = this.registerForm.value;
    
    try{
      const user = await this.autSvc.register(email, password);
      this.firebaseServiceService.createUsuario(email, cedula, apellido,
        nombre, lat, lon, telefono).then(resp=>{
        this.registerForm.reset();
        console.log(resp);
      }).catch(error => {
        console.error(error);
      });
      if(user){
         this.router.navigate(['/home']); 
      }

    }catch(error){
      console.log(error);
    }

    
  }
}