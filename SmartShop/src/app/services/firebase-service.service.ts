import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  constructor(
    private firestore: AngularFirestore
  ) { }
    // Metodo para obtener Usuarios
    getUsuarios(){
      return this.firestore.collection('Usuarios').snapshotChanges(); 
    }
    // Metodo para crear Usuario
    createUsuario(_email, _cedula, _apellido, _nombre, _lat, _lon, _telefono){
      return this.firestore.collection('Usuarios').add({
        email: _email, 
        cedula: _cedula, 
        apellido: _apellido, 
        nombre: _nombre, 
        lat: _lat, 
        lon: _lon, 
        telefono: _telefono,
        tipo: "cliente"
      });
    }
    // Metodo para editar Usuario
    updateUsuario(id: any,Usuario: any){
      return this.firestore.collection('Usuarios').doc(id).update(Usuario);
    }
    // Metodo para eliminar Usuario
    deleteUsuario(id: any){
      return this.firestore.collection('Usuarios').doc(id).delete();
    }

}
