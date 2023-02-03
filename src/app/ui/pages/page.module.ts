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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BirdsComponent } from './birds/birds.component';
import { CountriesComponent } from './countries/countries.component';
import { ZonesComponent } from './zones/zones.component';



@NgModule({
  declarations: [
    BirdsComponent,
    CountriesComponent,
    ZonesComponent
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
    BirdsComponent
  ]
})
export class PageModule { }
