import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../../app-routing.module';
import { ListComponent } from './list/list.component';
import { FormBirdsComponent } from './form-birds/form-birds.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ListComponent,
    FormBirdsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports:[
    NavbarComponent,
    ListComponent,
    FormBirdsComponent
  ]
})
export class ComponentsModule { }
