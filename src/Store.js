import { decorate, observable, action } from "mobx";
import { Presentation } from './models/Presentation';
import { init } from 'd2';
import { generateUid } from 'd2/uid';

export class Store {
  engine;
  presentations = [];
  d2;
  baseUrl;
  apiVersion;
  currentPresentation = new Presentation();
  constructor(engine, baseUrl, apiVersion) {
    this.engine = engine;
    this.currentPresentation.setEngine(this.engine);
    this.baseUrl = baseUrl;
    this.apiVersion = apiVersion;
  }
  setPresentation = val => {
    this.currentPresentation = val;
    this.currentPresentation.setEngine(this.engine);
  }
  setD2 = async () => {
    this.d2 = await init({
      appUrl: this.baseUrl,
      baseUrl: `${this.baseUrl}/api/${this.apiVersion}`
    });
  };

  fetchPresentations = async () => {
    try {
      const val = await this.d2.dataStore.has('smart-slides');
      if (val) {
        const namespace = await this.d2.dataStore.get('smart-slides');
        const presentations = await namespace.get('presentations');
      } else {
        const namespace = await this.d2.dataStore.create('smart-slides');
        namespace.set('presentations', this.presentations);
      }
    } catch (e) {
      console.log(e);
    }
  };

  savePresentation = async () => {
    if (this.currentPresentation.id) {
      const mapping = _.findIndex(this.presentations, { id: this.currentPresentation.id });
      if (mapping !== -1) {
        this.presentations.splice(mapping, 1, this.currentPresentation);
      } else {
        this.presentations = [...this.presentations, this.currentPresentation];
      }
    } else {
      this.currentPresentation.setId(generateUid());
      this.presentations = [...this.presentations, this.currentPresentation];
    }

    const whatToSave = this.presentations.map(p => {
      return p.canBeSaved;
    });
    const namespace = await this.d2.dataStore.get('smart-slides');
    namespace.set('presentations', whatToSave);
  };

}

decorate(Store, {
  presentations: observable,
  engine: observable,
  currentPresentation: observable,
  d2: observable,
  setD2: action,
  savePresentation: action
});
