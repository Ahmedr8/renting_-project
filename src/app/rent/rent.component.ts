import { Component, OnInit } from '@angular/core';
import { RouteInfo } from '../google-maps/maps-route.model';
interface IconUrls {
  [key: string]: string; // Index signature for string keys with string values
}
@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent implements OnInit {
  routeInfos: RouteInfo[] = [];
  property={
    coordinatesLat:36.866537 ,
    coordinatesLng:10.164723
  }
  constructor() { }
  iconUrls: IconUrls = {
    'DRIVING': '../google-maps/images/driving.svg',
    'TRANSIT': '../google-maps/images/walking.svg', 
  };
  ngOnInit(): void {
  }
  onRouteInfoReady(routeInfos: RouteInfo[]): void {
    this.routeInfos = routeInfos;
    console.log('Received route information:', this.routeInfos);
  }
}
