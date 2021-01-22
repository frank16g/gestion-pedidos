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
    createUsuario(Usuario: any){
      return this.firestore.collection('Usuarios').add(Usuario);
    }
    // Metodo para editar Usuario
    updateUsuario(id: any,Usuario: any){
      return this.firestore.collection('Usuarios').doc(id).update(Usuario);
    }
    // Metodo para eliminar Usuario
    deleteUsuario(id: any){
      return this.firestore.collection('Usuarios').doc(id).delete();
    }
    // Metodo para obtener Productos
    getProductos(){
      return this.firestore.collection('Productos').snapshotChanges(); 
    }
}
