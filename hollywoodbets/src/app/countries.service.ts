import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {countries} from './countries';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private countryurl='https://localhost:44327/countrySport/';
  
  constructor(private _http:HttpClient) { }

  getCountries():Observable<countries[]>{
    return this._http.get<countries[]>(this.countryurl);
  }

  getCountrybyID(id:number):Observable<countries[]>{
    return this._http.get<countries[]>(this.countryurl+id);
  }
}
