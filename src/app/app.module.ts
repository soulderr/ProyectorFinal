import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import {HttpClientModule} from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { DetalleGaleriaComponent } from './pages/detalle-galeria/detalle-galeria.component';
import {ReactiveFormsModule} from '@angular/forms';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { NuestroObjetivoComponent } from './pages/nuestro-objetivo/nuestro-objetivo.component';
import { MatematicasComponent } from './pages/matematicas/matematicas.component';
import { FisicaComponent } from './pages/fisica/fisica.component';
import { BiologiaComponent } from './pages/biologia/biologia.component';
import { LenguaYLiteraturaComponent } from './pages/lengua-yliteratura/lengua-yliteratura.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { FilosofiaComponent } from './pages/filosofia/filosofia.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GaleriaComponent,
    IniciosesionComponent,
    DetalleGaleriaComponent,
    RegistroComponent,
    QuienesSomosComponent,
    NuestroObjetivoComponent,
    MatematicasComponent,
    FisicaComponent,
    BiologiaComponent,
    LenguaYLiteraturaComponent,
    HistoriaComponent,
    FilosofiaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp({"projectId":"proyectofinal-64e54","appId":"1:152755115692:web:7bfe3716910427fb6df109","storageBucket":"proyectofinal-64e54.appspot.com","apiKey":"AIzaSyA-x_TSKU5YXR2u0FIRtCzhzShS0cUVNjk","authDomain":"proyectofinal-64e54.firebaseapp.com","messagingSenderId":"152755115692"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
