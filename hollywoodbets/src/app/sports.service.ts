import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sports} from './sport';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SportsService {
  private sporturl='https://localhost:44327/sportType';
  constructor(private _http: HttpClient) { }


  getSport():Observable<Sports[]>{
    return this._http.get<Sports[]>(this.sporturl);
  }
}
