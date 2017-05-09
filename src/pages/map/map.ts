import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-contact',
  templateUrl: 'map.html'
})


export class MapPage {


  constructor(public navCtrl: NavController, public geolocation: Geolocation) {}

}
