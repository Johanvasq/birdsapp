import { ZoneGateway } from '../../../domain/models/zone/gateway/zone.gateway';
import { IZoneRequest } from './zone.model';
import { IZoneModel } from '../../../domain/models/zone/zone.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ICountryModel } from '../../../domain/models/country/country.model';

@Injectable({
  providedIn: 'root'
})
export class ZoneService extends ZoneGateway {

  private httpHeaders = new HttpHeaders({ "Content-Type": "application/json" })

  API: string = "http://localhost:8087/zone";
  constructor(public http: HttpClient) {
    super();
  }


  saveZone(params: IZoneRequest): Observable<IZoneModel> {
    return this.http.post<IZoneModel>(this.API, params, {
      headers: this.httpHeaders
    });
  }

  updateZone(params: IZoneRequest): Observable<IZoneModel> {
    return this.http.put<IZoneModel>(this.API, params, {
      headers: this.httpHeaders
    });
  }

  findZoneById(id: number): Observable<IZoneModel> {
    return this.http.get<IZoneModel>(`${this.API}/${id}`, {
      headers: this.httpHeaders
    });
  }

  findAllZones(): Observable<IZoneModel[]> {
    return this.http.get<Array<IZoneModel>>(this.API, {
      headers: this.httpHeaders
    })
  }

  deleteZone(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.API}/{id}`, {
      headers: this.httpHeaders
    })
  }
}
