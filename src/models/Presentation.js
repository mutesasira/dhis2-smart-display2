import { action, decorate, observable } from 'mobx';
import _ from 'lodash';

class Presentation {
  id;
  name = '';
  dashboards = [];
  description = '';

  setName = val => this.name = val;
  setDashboards = val => this.dashboards = val;
  setDescription = val => this.description = val;

}

decorate(Presentation, {
  name: observable,
  dashboards: observable,
  description: observable,

  setName: action,
  setDashboards: action,
  setDescription: action,
});

export default Presentation;
