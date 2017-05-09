import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';
import {Http} from '@angular/http';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';
//import { Observable } from "rxjs/Observable";

import { SimpleCatch } from '../../models/catch';
import { Weather } from '../../models/weatherModel';
import { Settings } from '../../models/settings';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public currentCatch:SimpleCatch = new SimpleCatch();
  public catches:Array<SimpleCatch> = new Array<SimpleCatch>();

  constructor(public navCtrl: NavController, public http:Http) {
    http.get("api/catches")
    .subscribe(
      data => this.catches = data.json().catches);
  }

  public addCatch()
  {
    this.currentCatch.latitude = 55.6427628;
    this.currentCatch.longitude = 12.101314;
    this.currentCatch.datetime = "2017-04-03 9:00:00";
    alert(JSON.stringify(this.currentCatch));
    this.http.post("api/catches", JSON.stringify(this.currentCatch))
    .subscribe(
      (val) => { alert("data succesfully send! " + val.text())},
      (err) => { alert("No data received! " + err ) },
      ()    => { alert("task completed?") }
    )

  }
}
