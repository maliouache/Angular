import { Component, OnInit,Input, AfterViewInit, SimpleChanges } from '@angular/core';
import {GoogleApiService} from '../../services/google-maps/shared/google-api.service'
import { OnChanges } from '@angular/core';
@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() private product:any;
  @Input() private shippings:any;
  height = '100%';
  width = '100%';
  myLatLng = {lat: -25.363, lng: 131.044};
  map:any;
  
  constructor(private googleApi:GoogleApiService) { }

  ngOnInit() {
    
  }
  ngOnChanges(changes: SimpleChanges){
    console.log(this.product);
    this.googleApi.initMap().then(() => {
      this.myLatLng={lat:this.shippings[0].latitude_start,lng:this.shippings[0].longitude_start};
      let latlng = new google.maps.LatLng(this.myLatLng.lat, this.myLatLng.lng);

      this.map = new google.maps.Map(document.getElementById('map'), {
        center: latlng,
        zoom: 4
      });

      new google.maps.Marker({
        position: latlng,
        map: this.map,
        title: 'Hello World!'
      });
    });
  }
  ngAfterViewInit(){
    console.log(this.product);

  }

}
