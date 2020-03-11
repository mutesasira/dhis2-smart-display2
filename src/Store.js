import { decorate, observable, action } from "mobx";
import { Settings } from './models/Settings';
import { init } from 'd2'

export class Store {
  engine;
  settings = [];
  d2;
  baseUrl;
  apiVersion;
  currentSetting = new Settings();
  constructor(engine, baseUrl, apiVersion) {
    this.engine = engine;
    this.currentSetting.setEngine(this.engine);
    this.baseUrl = baseUrl;
    this.apiVersion = apiVersion;
  }
  setCurrentSetting = val => {
    this.currentSetting = val;
    this.currentSetting.setEngine(this.engine);
  }
  setD2 = async () => {
    this.d2 = await init({
      appUrl: this.baseUrl,
      baseUrl: `${this.baseUrl}/api/${this.apiVersion}`
    });
  };
}

decorate(Store, {
  settings: observable,
  engine: observable,
  d2: observable,
  setD2: action
});
