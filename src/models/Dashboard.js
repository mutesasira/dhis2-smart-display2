import { action, decorate, observable, computed } from 'mobx';

export class Dashboard {
  id;
  name;
  itemCount;
  dashboardItems = [];

  setId = val => this.id = val;
  setName = val => this.name = val;
  setItemCount = val => this.itemCount = val;
  setDashboardItems = val => this.dashboardItems = val;
  get selectedItems(){
    return this.dashboardItems.filter(item=>item.selected === true).length;
  }

}

decorate(Dashboard, {
  id: observable,
  name: observable,
  dashboardItems: observable,
  itemCount: observable,

  setId: action,
  setName: action,
  setItemCount: action,
  setDashboardItems: action,
  selectedItems:computed

});