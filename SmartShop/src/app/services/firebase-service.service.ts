import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { AngularFirestore } from '@angular/fire/firestore';
=======
import { AngularFirestore, AngularFirestoreCollectionGroup } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
>>>>>>> parent of 418bd23... restart

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
<<<<<<< HEAD
  constructor(
    private firestore: AngularFirestore
  ) { }
=======
 
  constructor(private firestore: AngularFirestore) { }


>>>>>>> parent of 418bd23... restart
    // Metodo para obtener Usuarios
    getUsuarios(){
      return this.firestore.collection('Usuarios').snapshotChanges(); 
    }
<<<<<<< HEAD
=======
    getRepartidores(){
      return this.firestore.collection('Repartidores').snapshotChanges(); 
    }
>>>>>>> parent of 418bd23... restart
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
    // Metodo para obtener Productos
    getProductos(){
      return this.firestore.collection('Productos').snapshotChanges(); 
    }

    // Metodo para crear Producto
    createProducto(_producto){
      return this.firestore.collection('Productos').add(_producto);
    }
<<<<<<< HEAD
=======
    crearRepartidor(_repartidor){
      return this.firestore.collection('Repartidores').add(_repartidor);
    }
>>>>>>> parent of 418bd23... restart
    // Metodo para Actualizar Producto
    updateProducto(id: any,producto: any){
      console.log(producto);
      return this.firestore.collection('Productos').doc(id).update(producto);
    }
<<<<<<< HEAD
=======
    updateRepartidor(id: any,repartidor: any){
      console.log(repartidor);
      return this.firestore.collection('Repartidores').doc(id).update(repartidor);
    }
>>>>>>> parent of 418bd23... restart
    // Metodo para Eliminar Producto
    deleteProducto(id: any){
      return this.firestore.collection('Productos').doc(id).delete();
    }
<<<<<<< HEAD
=======
    deleteRepartidor(id: any){
      return this.firestore.collection('Repartidores').doc(id).delete();
    }
>>>>>>> parent of 418bd23... restart
    // Metodo para obtener las Categorias de Pedidos
    getCategorias(){
      return this.firestore.collection('Categorias').snapshotChanges(); 
    }
<<<<<<< HEAD


=======
    // Metetodo para obtener Repartidor

  getRepartidoresF<tipo>(path:string){
    const collection=this.firestore.collection<tipo>(path,ref=>ref.where('tipo','==','repartidor'));
    return collection.valueChanges();
  }

  getRepartidoresQuery<tipo>(path:string,parametro:string,condicion:any,busqueda:string){
    const collection=this.firestore.collection<tipo>(path,ref=>ref.where(parametro,condicion,busqueda));
    return collection.valueChanges();
  }

  getCollection<tipo>(path:string){
    const collectio=this.firestore.collection<tipo>(path);
    return collectio.valueChanges();
  }
  
>>>>>>> parent of 418bd23... restart

}
