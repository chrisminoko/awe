import { Component, OnInit } from '@angular/core';
import { SportsService } from '../sports.service';
import { HttpClient } from '@angular/common/http';
import { Sports } from '../sport';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  sport: Sports[];
  constructor(
    private _httpclient: HttpClient,
    private _sportservice: SportsService,
    private _router: Router) {


  }
  term: string;
  ngOnInit(): void {

    this.getSport();

  }

  getSport() {
    return this._sportservice.getSport().subscribe((data: any) => {
      this.sport = data;
      console.log('sport', this.sport)
    })
  }

  getCountries(id: number) {
    this._router.navigateByUrl(`/countries/${id}`);
  }


}
