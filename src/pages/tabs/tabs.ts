import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings';
import { MapPage } from '../map/map';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SettingsPage;
  tab3Root = MapPage;

  constructor() {

  }
}
