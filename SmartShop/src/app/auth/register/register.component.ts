<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
>>>>>>> parent of 418bd23... restart
import {FormGroup, FormControl} from '@angular/forms';
import { AuthService } from './../services/auth.service';
import {Router} from '@angular/router';
import { User } from '../../models/user';
<<<<<<< HEAD
import { FirebaseServiceService } from '../../services/firebase-service.service';
=======
import { FirebaseServiceService} from '../../services/firebase-service.service';
import  * as L from 'leaflet';
import { ServiceMapService } from '../../services/service-map.service';
//import 'mapbox-gl-leaflet';
>>>>>>> parent of 418bd23... restart

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'], 
<<<<<<< HEAD
  providers: [AuthService],
})
export class RegisterComponent implements OnInit {
=======
  
  providers: [AuthService],
})
export class RegisterComponent implements OnInit, AfterViewInit  {

  //private map: L.Map;

  //@ViewChild('map')
  //private mapContainer: ElementRef<HTMLElement>;
>>>>>>> parent of 418bd23... restart

  registerForm = new FormGroup({
    cedula: new FormControl(''),
    apellido: new FormControl(''),
    nombre: new FormControl(''),
    lat: new FormControl(''),
    lon: new FormControl(''),
    telefono: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })
<<<<<<< HEAD


  constructor(
    private autSvc:AuthService, 
    private router: Router,
    private firebaseServiceService: FirebaseServiceService
=======
  latitud: any;
  longi: any;
  data: any;
  constructor(
    private autSvc:AuthService, 
    private router: Router,
    private firebaseServiceService: FirebaseServiceService,
    private serviceMapService: ServiceMapService
>>>>>>> parent of 418bd23... restart
    ) { }

  ngOnInit(): void {
  }
  async onRegister(){

    const {email, password, cedula, apellido,
    nombre, lat, lon, telefono} = this.registerForm.value;
    
    try{
      const user = await this.autSvc.register(email, password);
      this.firebaseServiceService.createUsuario(email, cedula, apellido,
<<<<<<< HEAD
        nombre, lat, lon, telefono).then(resp=>{
=======
        nombre, this.latitud, this.longi, telefono).then(resp=>{
>>>>>>> parent of 418bd23... restart
        this.registerForm.reset();
        console.log(resp);
      }).catch(error => {
        console.error(error);
      });
      if(user){
         this.router.navigate(['/home']); 
      }

    }catch(error){
      console.log(error);
    }

    
  }
<<<<<<< HEAD
}
=======
  ngAfterViewInit(): void {
    this.initMap();
    
  }
  private initMap(): void {

    
let myMap = L.map('map').setView([-1.2490800, -78.6167500], 13)
var marker = L.marker([-1.2490800, -78.6167500]).addTo(myMap);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(myMap);

myMap.on('click', e => {
  let latLng = myMap.mouseEventToLatLng((e as L.LeafletMouseEvent).originalEvent);
  marker.setLatLng([latLng.lat, latLng.lng]);
  this.latitud = latLng.lat;
  this.longi = latLng.lng;
  this.data = this.serviceMapService.getServicesMap(latLng.lat, latLng.lng);

  console.log(this.data);
  console.log(this.data);
})


myMap.doubleClickZoom.disable();

// var geocodeService = L.esri.Geocoding.geocodeService();

// myMap.on('click', function (e) {
//   let latLng = myMap.mouseEventToLatLng((e as L.LeafletMouseEvent).originalEvent);
//     geocodeService.reverse().latlng(latLng).run(function (error, result) {
//       if (error) {
//         return;
//       }

//       L.marker(result.latlng).addTo(myMap).bindPopup(result.address.Match_addr).openPopup();
//    });
//   });

navigator.geolocation.getCurrentPosition(
    (pos) => {
        const { coords } = pos
        const { latitude, longitude } = coords
marker.setLatLng([latitude, longitude]);

        setTimeout(() => {
            myMap.panTo(new L.LatLng(latitude, longitude))
        }, 5000)
    },
    (error) => {
        console.log(error)
    },
    {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    })
  }
  }
  



  // mapa de folleto

  // ngAfterViewInit() {
    
  //   const myAPIKey = "a3fa402a45734b1ba85ad67c2b77e350";
  //   const mapStyle = "https://maps.geoapify.com/v1/styles/osm-carto/style.json";

  //   const initialState = {
  //     lng: -78.6167500,
  //     lat: -1.2490800,
  //     zoom: 13
  //   };

  //   const map = new L.Map(this.mapContainer.nativeElement).setView(
  //     [initialState.lat, initialState.lng],
  //     initialState.zoom
      
  //   );

  //   // the attribution is required for the Geoapify Free tariff plan
  //   map.attributionControl
  //     .setPrefix("")
  //     .addAttribution(
  //       'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | © OpenStreetMap <a href="https://www.openstreetmap.org/copyright" target="_blank">contributors</a>'
  //     );

  //   L.mapboxGL({
  //     style: `${mapStyle}?apiKey=${myAPIKey}`,
  //     accessToken: "pk.eyJ1IjoiZnJhbmsxNmciLCJhIjoiY2tpanZncjBoMDBzdzJ0cGRka2FlcjFkcSJ9.xbe9vAWEmcGhF4QlIheZgg"
  //   }).addTo(map);
    

>>>>>>> parent of 418bd23... restart
