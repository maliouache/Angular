import { Component, OnInit, Inject } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Element } from '@angular/compiler';
import { ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
declare var window: any;
declare var google: any;
const url = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCPIqMss7WGU-sWaI3YBBvMQxsZWm4Nvs4&callback=initMap'
@Component({
  selector: 'app-add-trajet',
  templateUrl: './add-trajet.component.html',
  styleUrls: [
    './add-trajet.component.css'
  ]
})
export class AddTrajetComponent implements OnInit {
  private mapRef: any;
  loadAPI: Promise<any>
  constructor(){
    this.loadAPI = new Promise((resolve) => {
      window['initMap'] = (ev) => {
        console.log('gapi loaded')
        resolve(window.gapi);
      }
      this.loadScript()
    });
    
  }
  
  doSomethingGoogley(){
    return this.loadAPI.then((gapi) => {
      console.log(gapi);
      var self=this;
    setTimeout(function () {
      self.showMap();
    }, 2000)
    });
  }
  
  loadScript(){
    console.log('loading..')
    let node = document.createElement('script');
    node.src = url;
    node.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(node);
    this.mapRef= document.getElementById('googleMap');

    
  }

  showMap() {  
    console.log(this.mapRef.nativeElement);
    const location = { lat: 28.5355, lng: 77.3910 };
    var options = {
      center: location,
      zoom: 8
    }

    const map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarket(location, map);
  }
  addMarket(pos, map) {
    return new google.maps.Marker({
      position: pos,
      map: map,
    });
  }

}
