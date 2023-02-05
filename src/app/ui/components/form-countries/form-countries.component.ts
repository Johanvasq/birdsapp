import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICountryModel} from "../../../domain/models/country/country.model";

@Component({
  selector: 'app-form-countries',
  templateUrl: './form-countries.component.html',
  styleUrls: ['./form-countries.component.css']
})
export class FormCountriesComponent implements OnInit {

  guardarBtn:boolean = true;
  id: number = 0;
  name: string = "";

  @Input()
  set infoCountry (country: ICountryModel |null){
    if (country != null){
      // @ts-ignore
      this.id = country.id;
      this.name = country.countryName;
      this.guardarBtn = false;
    }
  }
  @Output() evento = new EventEmitter<ICountryModel>();
  @Output() eventoEdit = new EventEmitter<ICountryModel>();

  constructor() { }

  ngOnInit(): void {
  }

  saveCountry(){
    let obj: ICountryModel = {
      countryName : this.name
    }
    this.evento.emit(
      obj
    )
    this.id = 0
    this.name = "";
  }

  updateCountry(){
    let obj: ICountryModel = {
      id : this.id,
      countryName: this.name
    }
    this.eventoEdit.emit(
      obj
    )
    this.id = 0
    this.name = "";
    this.guardarBtn = true;
  }


}
