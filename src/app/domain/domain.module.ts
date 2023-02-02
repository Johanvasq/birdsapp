import { ZoneUseCase } from './usecase/zone.usecase';
import { CountryUseCase } from './usecase/country.usecase';
import { BirdUseCase } from './usecase/bird.usecase';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    BirdUseCase,
    CountryUseCase,
    ZoneUseCase
  ]
})
export class DomainModule { }
