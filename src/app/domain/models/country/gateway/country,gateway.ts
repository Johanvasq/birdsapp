import { ICountryRequest } from './../../../../infrastucture/driven-adapter/country/country.model';
import { Observable } from 'rxjs';
import { ICountryModel } from './../country.model';


export abstract class CountryGateway {
    
    abstract saveCountry(params: ICountryRequest) : Observable<ICountryModel>;

    abstract updateCountry(params: ICountryRequest) : Observable<ICountryModel>;

    abstract findCountryById(id : number) : Observable<ICountryModel>;

    abstract findAllCountries(): Observable<Array<ICountryModel>>;

    abstract deleteCountry(id : number) : Observable<boolean>;

}