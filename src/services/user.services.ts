import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {
    constructor(private firestore: AngularFirestore) {}

    // Crear un usuario
    createUser(user: any) {
        return this.firestore.collection('usuarios').add(user);
    }

    // Obtener todos los usuarios
    getUsers() {
        return this.firestore.collection('usuarios').snapshotChanges();
    }

    // Actualizar un usuario
    updateUser(user: any) {
        let userRef = this.firestore.collection('usuarios').doc(user.id);
        return userRef.update(user);
    }

    // Eliminar un usuario
    deleteUser(user: any) {
        let userRef = this.firestore.collection('usuarios').doc(user.id);
        return userRef.delete();
    }
}