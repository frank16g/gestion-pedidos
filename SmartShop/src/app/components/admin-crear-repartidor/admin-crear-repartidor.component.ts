import { Component, OnInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { from } from 'rxjs';
import {FirebaseServiceService} from '../../services/firebase-service.service';
import { AngularFireStorage } from '@angular/fire/storage'; 

@Component({
  selector: 'app-admin-crear-repartidor',
  templateUrl: './admin-crear-repartidor.component.html',
  styleUrls: ['./admin-crear-repartidor.component.scss']
})
export class AdminCrearRepartidorComponent implements OnInit {

  constructor(
    private firebaseServiceService: FirebaseServiceService,
    private storage:AngularFireStorage

  ) { }

  ngOnInit(): void {
  }
  pNombre: string;
  pApellido:string;
  pCedula: string;
  pEmail: string;
  pDireccion: string;
  pTelefono: string;
  
  crearRepartidor(){

    let Repartidor ={};
    Repartidor['nombre']=this.pNombre;
    Repartidor['apellido']=this.pApellido;
    Repartidor['cedula']=this.pCedula;
    Repartidor['email']=this.pEmail;
    Repartidor['direccion']=this.pDireccion;
    Repartidor['telefono']=this.pTelefono;
    Repartidor['tipo']='repartidor';
    
    this.firebaseServiceService.crearRepartidor(Repartidor).then(res=>{
      this.pNombre="";
      this.pApellido="";
      this.pCedula="";
      this.pEmail="";
      this.pDireccion="";
      this.pTelefono="";
    }).catch(error=>{
      alert('Ingrese todos los datos');
    });
    alert('Repartidor creado');
  }
  
}
