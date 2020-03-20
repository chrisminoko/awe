import { Component, OnInit } from '@angular/core';
import {CountriesService} from '../countries.service';
import {countries} from '../countries';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
 countries : countries [];
  constructor(private _countriesservice:CountriesService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.getcountries();
    this.getcountrybyID();
  }

  


  getcountries(){
    return this._countriesservice.getCountries().subscribe(res=>{
    this.countries=res
    console.log(this.countries);
    })
  }

  getcountrybyID(){
    var sportId =+this.route.snapshot.paramMap.get('sportId');
    return this._countriesservice.getCountrybyID(sportId).subscribe(res=>{
      console.log("Country by Id is ",res);
      this.countries=res;
      
    })
  }


}
