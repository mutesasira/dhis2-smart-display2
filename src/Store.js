import { decorate, observable, action } from "mobx";
import { Settings } from './models/Settings';
export class Store {
  engine;
  settings = [];
  currentSetting = new Settings();
  constructor(engine) {
    this.engine = engine;
    this.currentSetting.setEngine(this.engine);
  }
  setCurrentSetting = val => {
    this.currentSetting = val;
    this.currentSetting.setEngine(this.engine);
  }
}

decorate(Store, {
  settings: observable,
  engine: observable
});
