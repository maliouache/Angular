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
  @Input() private choosedShipping:any;
  private direction:any;
  height = '100%';
  width = '100%';
  myLatLng = {lat: -25.363, lng: 131.044};
  private map:any;
  
  constructor(private googleApi:GoogleApiService) { }

  ngOnInit() {
    
  }
  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
    if (this.product){
      // this.myLatLng={lat:this.product.latitude,lng:this.product.longitude};
      this.myLatLng=new google.maps.LatLng(this.product.latitude, this.product.longitude);

    }
    
    this.googleApi.initMap().then(() => {
      if (this.choosedShipping){
        // this.myLatLng={lat:this.choosedShipping.latitude_end,lng:this.choosedShipping.longitude_end};
        
        let dest=new google.maps.LatLng(this.choosedShipping.latitude_end, this.choosedShipping.longitude_end);
        let ori=new google.maps.LatLng(this.choosedShipping.latitude_start, this.choosedShipping.longitude_start);
        let myOptions= {
          zoom:7,
          center:ori
        };
        let map=new google.maps.Map(document.getElementById('map'),myOptions);
        let directionService=new google.maps.DirectionsService;
        let directionDisplay=new google.maps.DirectionsRenderer({
          map:map,
        });
        let markerA=new google.maps.Marker({
          position:ori,
          title: "Origin",
          label:"A",
          map: map
        });
        let markerB=new google.maps.Marker({
          position:dest,
          title: "Destination",
          label:"B",
          map: map
        });
        console.log(this.myLatLng);
        let markerC=new google.maps.Marker({
          position:this.myLatLng,
          title: "Product",
          label:this.product.name,
          map: map
        });

        this.calculateDist(directionService,directionDisplay,ori,dest);
      }
        
      });
      
  }
  ngAfterViewInit(){

  }
  calculateDist(directionService,directionDisplay,origin,destination){
    directionService.route({
      origin:origin,
      destination:destination,
      travelMode:google.maps.TravelMode.DRIVING
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
