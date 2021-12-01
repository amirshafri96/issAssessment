import { Component, OnInit } from '@angular/core';
import { SatelliteServiceService } from '../service/satellite-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private satelliteService: SatelliteServiceService) { }
  userDateTime: any;
  ngOnInit() {
  }

  getData(){
    var date = new Date(this.userDateTime);
    let data = date.getTime()/1000;
    console.log(data);
    this.satelliteService.getData(data).subscribe(result => {
      console.log(result);
    })
  }

}
