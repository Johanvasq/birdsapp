import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {ICountryModel} from "../../../domain/models/country/country.model";
import {CountryUseCase} from "../../../domain/usecase/country.usecase";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  listaCountries: Array<ICountryModel> | null = []

  country : ICountryModel | null;

  constructor(private countryUseCase: CountryUseCase) {

  }

  ngOnInit(): void {
    this.listar();
  }
  async listar(){
    await this.countryUseCase.findAllCountries().subscribe(
      result => {
        this.listaCountries = result
      }
    );
  }

  addItem(newItem: ICountryModel | null) {
    this.country = newItem
  }
  async saveCountry(item: ICountryModel){
    await this.countryUseCase.saveCountry(item).subscribe(
      () => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Guardado',
          showConfirmButton: false,
          timer: 1500
        })
        this.listar();
      }
    );

  }

  async delete(id: number) {
    await this.countryUseCase.deleteCountry(id).subscribe(
      () => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Eliminado correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        this.listar();
      }
    );

  }

  async updateCountry(item: ICountryModel){
    await this.countryUseCase.updateCountry(item).subscribe(
      () => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Guardado',
          showConfirmButton: false,
          timer: 1500
        })
        this.listar();
      }
    );

  }

}
