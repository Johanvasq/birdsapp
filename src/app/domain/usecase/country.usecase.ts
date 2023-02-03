import { ICountryModel } from './../models/country/country.model';
import { ICountryRequest } from './../../infrastucture/driven-adapter/country/country.model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { CountryGateway } from '../models/country/gateway/country,gateway';


@Injectable()
export class CountryUseCase{

    constructor(private countryGateway: CountryGateway){}

    saveCountry(params: ICountryRequest) : Observable<ICountryModel | null>{
        return this.countryGateway.saveCountry(params).pipe(
            catchError(() => {
                return of(null);
            })
        )
    }
/**
 * Servicio para actualizar Country
 * @param params params: {name}
 * @returns 
 */
    updateCountry(params: ICountryRequest) : Observable<ICountryModel | null>{
        return this.countryGateway.updateCountry(params).pipe(
            catchError(() => {
                return of(null);
            })
        )
    }
/**
 * 
 * @param id 
 * @returns 
 */
    findCountryById(id : number) : Observable<ICountryModel | null>{
        return this.countryGateway.findCountryById(id).pipe(
            catchError(() => {
                return of(null);
            })
        )
    }

    findAllCountries(): Observable<Array<ICountryModel>  | null>{
        return this.countryGateway.findAllCountries().pipe(
            catchError(() => {
                return of(null);
            })
        )
    }

    deleteCountry(id : number) : Observable<boolean | null>{
        return this.countryGateway.deleteCountry(id).pipe(
            catchError(() => {
                return of(null);
            })
        )
    }


}