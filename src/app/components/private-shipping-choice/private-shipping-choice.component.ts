import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Http, Response } from '@angular/http';
import { DetailService } from '../../detail.service';
import {GoogleApiService} from '../../services/google-maps/shared/google-api.service'
declare var google: any;
declare var directionsService = new google.maps.DirectionsService();
@Component({
  selector: 'app-private-shipping-choice',
  templateUrl: './private-shipping-choice.component.html',
  styleUrls: ['./private-shipping-choice.component.css']
})
export class PrivateShippingChoiceComponent implements OnInit {
  private item:any;
  private shippings:any;
  private map: any;
  
  constructor(private route : ActivatedRoute,private http:Http,private detail:DetailService, private googleApi:GoogleApiService) { }

  ngOnInit() {
  	this.route.params.subscribe((params:Params)=>{
  		this.detail.getDetails("Detail/"+params.id_item).subscribe(res => {this.item = res[0];console.log(res);})};
  	this.route.params.subscribe((params:Params)=>{
  		this.detail.getDetails("Shippings/"+params.id_item).subscribe((res:Response) => {this.shippings = res;console.log(res);})};
  }
  chooseShipping(shi:any){
    console.log(shi);
    this.map = document.getElementById('mapsh');
    var request = {
      origin      : new google.maps.LatLng(shi.latitude_start, shi.longitude_start),
      destination : new google.maps.LatLng(shi.latitude_end, shi.longitude_end),
      travelMode  : google.maps.DirectionsTravelMode.DRIVING // Mode de conduite
    }
    this.googleApi.initMap().then(() => {
      this.myLatLng={lat:this.product.latitude,lng:this.product.longitude};
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

    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
        directionsDisplay.setDirections(result);
    }

  }
 

}
