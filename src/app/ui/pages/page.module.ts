import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { BirdGateway } from '../../domain/models/bird/gateway/bird.gateway';
import { BirdService } from '../../infrastucture/driven-adapter/bird/bird.service';
import { CountryGateway } from '../../domain/models/country/gateway/country,gateway';
import { CountryService } from '../../infrastucture/driven-adapter/country/country.service';
import { ZoneGateway } from '../../domain/models/zone/gateway/zone.gateway';
import { ZoneService } from '../../infrastucture/driven-adapter/zone/zone.service';
import { DomainModule } from '../../domain/domain.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    DomainModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: BirdGateway, useClass: BirdService},
    {provide: CountryGateway,  useClass: CountryService},
    {provide: ZoneGateway, useClass:ZoneService},
  ], 
  exports: [
    HomeComponent
  ]
})
export class PageModule { }
