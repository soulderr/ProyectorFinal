import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {GaleriaComponent} from './pages/galeria/galeria.component';
import {DetalleGaleriaComponent} from './pages/detalle-galeria/detalle-galeria.component';
import {IniciosesionComponent} from './pages/iniciosesion/iniciosesion.component';
import {RegistroComponent} from './pages/registro/registro.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { NuestroObjetivoComponent } from './pages/nuestro-objetivo/nuestro-objetivo.component';
import { MatematicasComponent } from './pages/matematicas/matematicas.component';
import { FisicaComponent } from './pages/fisica/fisica.component';
import { BiologiaComponent } from './pages/biologia/biologia.component';
import { LenguaYLiteraturaComponent } from './pages/lengua-yliteratura/lengua-yliteratura.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { FilosofiaComponent } from './pages/filosofia/filosofia.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'galerias', component:GaleriaComponent},
  {path:'detalle/:id',component:DetalleGaleriaComponent},
  {path:'sesion', component:IniciosesionComponent},
  {path:'registro', component:RegistroComponent},
  {path:'nosotros', component:QuienesSomosComponent},
  {path:'objetivos', component:NuestroObjetivoComponent},
  {path:'matematicas', component:MatematicasComponent},
  {path:'fisica', component:FisicaComponent},
  {path:'biologia', component:BiologiaComponent},
  {path:'literatura', component:LenguaYLiteraturaComponent},
  {path:'historia', component:HistoriaComponent},
  {path:'filosofia', component:FilosofiaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
