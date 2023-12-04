import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,AbstractControl} from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit{
  formRegistro:FormGroup;
  usuario:AbstractControl;
  rut: AbstractControl;
  email:AbstractControl;
  region:AbstractControl;
  comuna:AbstractControl;
  password:AbstractControl;
  repassword:AbstractControl;

  ngOnInit(): void{

  }
  
  submitted = false;
  constructor(private form:FormBuilder ){
    this.formRegistro = this.form.group({
      usuario: ['', Validators.required] ,
      rut: ['', Validators.required] ,
      email: ['',Validators.compose([Validators.email,Validators.required])],
      region: [''],
      comuna: [''],
      password: ['',Validators.required],
      repassword: ['',Validators.required]
    });
    this.usuario= this.formRegistro.controls['usuario']; 
    this.rut= this.formRegistro.controls['rut']; 
    this.email= this.formRegistro.controls['email']; 
    this.region= this.formRegistro.controls['region']; 
    this.comuna= this.formRegistro.controls['comuna']; 
    this.password= this.formRegistro.controls['password']; 
    this.repassword= this.formRegistro.controls['repassword']; 
  }
  agregarUsuario(){
    this.submitted = true;

    
    const usuario: any = {
      nombre: this.usuario.value.nombre,
      rut: this.formRegistro.value.rut,
      email: this.formRegistro.value.email,
      region: this.formRegistro.value.region,
      comuna: this.formRegistro.value.comuna,
      password: this.formRegistro.value.password,
      repassword: this.formRegistro.value.repassword
    }
    
    console.log(usuario);
    

    }

}
