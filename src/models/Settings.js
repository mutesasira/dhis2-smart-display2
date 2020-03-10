import { decorate, observable, action } from "mobx"
import GroupStore from './GroupStore';
import { Dashboard } from './Dashboard';
import { DashboardItem } from './DashboardItem';
import { DashboardItemContent } from './DashboardItemContent'
import { extractFavorite } from '../modules/utils'
const query = {
  dashboards: {
    resource: 'dashboards.json',
    params: {
      fields: 'id,name,displayName,description,displayDescription,favorite,user[id,displayName~rename(name)],created,lastUpdated,access,dashboardItems[id,type,shape,messages,text,appKey,reports[id,displayName~rename(name)],resources[id,displayName~rename(name)],users[id,displayName~rename(name)],reportTable[id,displayName~rename(name),displayDescription~rename(description)],chart[type,id,displayName~rename(name),displayDescription~rename(description)],map[id,displayName~rename(name),displayDescription~rename(description)],eventReport[id,displayName~rename(name),displayDescription~rename(description)],eventChart[id,displayName~rename(name),displayDescription~rename(description)]]',
      paging: 'false'
    }
  }
}

const convert = (dashboards) => {
  const processedDashboards = dashboards.map(d => {
    const dashboard = new Dashboard();
    dashboard.setId(d.id);
    dashboard.setName(d.name);
    const dashboardItems = d.dashboardItems.map(item => {
      const dashboardItem = new DashboardItem();

      dashboardItem.setId(item.id);
      dashboardItem.setType(item.type);
      dashboardItem.setShape(item.shape);

      const i = extractFavorite(item);
      const content = new DashboardItemContent();

      content.setId(i.id);
      content.setName(i.name);
      content.setInterpretations(i.interpretations);
      content.setType(i.type);
      dashboardItem.setDashboardItemContent(content);
      return dashboardItem
    });
    dashboard.setDashboardItems(dashboardItems)
    return dashboard
  });
  return processedDashboards;
}
export class Settings {
  id;
  name = '';
  description = '';
  assignedItemStore = GroupStore.create({ state: [] });
  itemStore = GroupStore.create({ state: [] });
  dashboards = [];
  engine;
  setEngine = val => this.engine = val;
  assignItems = (items) => {
    const assigned = this.assignedItemStore.state.concat(items);
    this.assignedItemStore.setState(assigned);
    return Promise.resolve();
  }
  unAssignItems = (items) => {
    const assigned = this.assignedItemStore.state.filter(item => items.indexOf(item) === -1);
    this.assignedItemStore.setState(assigned);
    return Promise.resolve();
  }

  fetchDashboards = async () => {
    const { dashboards } = await this.engine.query(query);
    let items = dashboards.dashboards.map(d => {
      return { text: d.name, value: d.id };
    });
    this.dashboards = convert(dashboards.dashboards);
    this.itemStore.setState(items)
  }
}

decorate(Settings, {
  id: observable,
  name: observable,
  description: observable,
  assignedItemStore: observable,
  itemStore: observable,
  engine: observable,

  assignItems: action,
  unAssignItems: action,
  fetchDashboards: action
})