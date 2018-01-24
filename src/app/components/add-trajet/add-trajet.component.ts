import { Component, OnInit,Input, AfterViewInit, SimpleChanges } from '@angular/core';
import {GoogleApiService} from '../../services/google-maps/shared/google-api.service'
import { OnChanges } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AddProductService } from '../../services/add-product.service';

declare var google: any;
declare var directionsService = new google.maps.DirectionsService();

@Component({
  selector: 'app-add-trajet',
  templateUrl: './add-trajet.component.html',
  styleUrls: [
    './add-trajet.component.css'
  ]
})
export class AddTrajetComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() private product:any;
  @Input() private choosedShipping:any;
  private direction:any;
  height = '500px';
  width = '700px';
  margin = 'auto';
  myLatLng = {lat: -25.363, lng: 131.044};
  private map:any;
  private origin : String;
  private destination : String;
  private trajet_date: Date;
  private trajet_departure: time;
  private LngLatstart: any;
  private msg: any;
  private services:Object[];
  constructor(private googleApi:GoogleApiService, public cookieService: CookieService, private addTrajet: AddProductService, private router: Router) { }

  ngOnInit() {
    this.addTrajet.getServices(this.cookieService.get('ecomm')).subscribe(res =>{
      this.services=res;
    });
    this.googleApi.initMap().then(() => { 
      let myOptions= {
        zoom:7,
        center:new google.maps.LatLng(43.25,3.2888)
      };
      let map=new google.maps.Map(document.getElementById('map'),myOptions);
    }); 
  }
  save_traject(){
    if (this.origin && this.destination && this.trajet_departure && this.trajet_date) {
      let newTrajet = JSON.stringify({
        "owner": this.cookieService.get("ecomm"),
        "origin": this.origin,
        "detination": this.destination,
        "departure_date": this.trajet_date,
        "departure_time": this.trajet_departure
      });
      console.log(newTrajet);
      this.addTrajet.addTrajet(newTrajet);
      this.msg = "The new Traject has been added!";
      this.router.navigate(['my-traject']);
    }else {
      window.alert('please inter all the parameters');
    }
  }
  calculate(){
    console.log("date de depart est "+ this.trajet_date + "heure de depart "+ this.trajet_departure);
    //var date2 = new Date(this.trajet_date.getFullYear+ this.trajet_departure);
    this.googleApi.initMap().then(() => { 
        let dest=this.destination;
        let ori=this.origin;
        let myOptions= {
          zoom:7,
          center:new google.maps.LatLng(43.25,3.2888);
        };
        let map=new google.maps.Map(document.getElementById('map'),myOptions);
        let directionService=new google.maps.DirectionsService;
        let directionDisplay=new google.maps.DirectionsRenderer({
          map:map,
        });
        console.log("il est la");
        this.calculateDist(directionService,directionDisplay,ori,dest);  
      });   
  }
  ngAfterViewInit(){

  }
  calculateDist(directionService,directionDisplay,origin,destination){
    directionService.route({
      origin:origin,
      destination:destination,
      travelMode:google.maps.TravelMode.DRIVING,
      drivingOptions: {
        departureTime: new Date(this.trajet_departure),  // for the time N milliseconds from now.
        trafficModel: 'optimistic'
      }    
    },
  
    function(response,status){
      if (status=="OK"){
        directionDisplay.setDirections(response);
      }
      else{
        window.alert('error map rout'+status);
      }
    });

  }
  

}
