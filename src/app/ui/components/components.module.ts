import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { GuardarComponent } from './guardar/guardar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { EliminarComponent } from './eliminar/eliminar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ListaComponent,
    GuardarComponent,
    ActualizarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    NavbarComponent,
    ListaComponent,
    GuardarComponent,
    ActualizarComponent,
    EliminarComponent
  ]
})
export class ComponentsModule { }
