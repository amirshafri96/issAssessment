import { Component, OnInit } from '@angular/core';
import { SatelliteServiceService } from '../service/satellite-service.service';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { Position } from '../bean/Position';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private satelliteService: SatelliteServiceService) { }
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.75;
  lng = -122.41;
  userDateTime: any;
  ngOnInit() {
    // mapboxgl.accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 1,
      center: [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    //  this.loadMap(null);
  }

  getData() {
    var date = new Date(this.userDateTime);
    let data = date.getTime() / 1000;
    console.log(data);
    this.satelliteService.getData(data).subscribe(result => {
      console.log(result);
      let data = this.processLocation(result);

      this.loadMap(data);
    })
  }

  processLocation(result: Position[]): any {
    this.map = null;
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 1,
      center: [this.lng, this.lat]
    });
    let output: any[] = [];
    for (var val of result) {
      let temp = [val.longitude, val.latitude];
      output.push(temp)
    }
    return output;
  }

  loadMap(result: any[]) {
    // this.map.remove();
    document.getElementById("map").innerHTML = "";
    
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 1,
      center: [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.on('load', () => {
      this.map.addSource('route', {
        'type': 'geojson',
        'data': {
          'type': 'Feature',
          'properties': {},
          'geometry': {
            'type': 'LineString',
            'coordinates': result
          }
        }
      });
      this.map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        'layout': {
          'line-join': 'round',
          'line-cap': 'round'
        },
        'paint': {
          'line-color': '#888',
          'line-width': 8
        }
      });
    });


  }

}
