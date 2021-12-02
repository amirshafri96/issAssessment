import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
//for view purpose
  private _viewMode: string;

  @Input() set viewMode(mode) {
    this._viewMode = mode;
  }
  get viewMode() {
    return this._viewMode;
  }
  constructor() { }

  ngOnInit() {
    console.log(this.viewMode)
  }

}
