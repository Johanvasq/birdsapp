import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CountryUseCase} from "../../../domain/usecase/country.usecase";
import {ICountryModel} from "../../../domain/models/country/country.model";

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css']
})
export class ListCountriesComponent implements OnInit {

  @Input() lista: ICountryModel[] | null= [];
  @Output() editId = new EventEmitter<ICountryModel | null>();
  @Output() deleteId = new EventEmitter<number>();

  constructor(private countrydUseCase: CountryUseCase) { }

  ngOnInit(): void {

  }

  delete(id: number | undefined){
    if (id != null){

      this.deleteId.emit(id);
    }
  }

  async edit(id: number | undefined) {

    if (id != undefined){
      await this.countrydUseCase.findCountryById(id).subscribe(
        result => {
          this.editId.emit(result)
        }
      )
    }

  }
}
