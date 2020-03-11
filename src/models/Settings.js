import { decorate, observable, action, computed, extendObservable } from "mobx"
import GroupStore from './GroupStore';
import { Dashboard } from './Dashboard';
import { DashboardItem } from './DashboardItem';
import { DashboardItemContent } from './DashboardItemContent'
import { extractFavorite } from '../modules/utils';
import { getEndPointName } from '../modules/ItemTypes'
import { flatten, fromPairs } from 'lodash';
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
      content.setType(item.type);
      dashboardItem.setDashboardItemContent(content);
      return dashboardItem
    });
    dashboard.setDashboardItems(dashboardItems)
    return dashboard
  });
  return processedDashboards;
}

const process = (items) => {
  const p = items.map(item => {
    return [item.id, item]
  });

  return fromPairs(p)
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
    const { dashboards: { dashboards } } = await this.engine.query(query);
    let items = dashboards.map(d => {
      return { text: d.name, value: d.id };
    });
    this.dashboards = convert(dashboards);
    this.itemStore.setState(items)
  }

  fetchItem = async (item) => {
    const endpoint = getEndPointName(item.type);
    const query1 = {
      item: {
        resource: `${endpoint}/${item.id}`,
        params: {
          fields: 'id,displayName~rename(name),displayDescription~rename(description),columns[dimension,legendSet[id],filter,programStage,items[dimensionItem~rename(id),displayName~rename(name),dimensionItemType]],rows[dimension,legendSet[id],filter,programStage,items[dimensionItem~rename(id),displayName~rename(name),dimensionItemType]],filters[dimension,legendSet[id],filter,programStage,items[dimensionItem~rename(id),displayName~rename(name),dimensionItemType]],*,!attributeDimensions,!attributeValues,!category,!categoryDimensions,!categoryOptionGroupSetDimensions,!columnDimensions,!dataDimensionItems,!dataElementDimensions,!dataElementGroupSetDimensions,!filterDimensions,!itemOrganisationUnitGroups,!lastUpdatedBy,!organisationUnitGroupSetDimensions,!organisationUnitLevels,!organisationUnits,!programIndicatorDimensions,!relativePeriods,!reportParams,!rowDimensions,!series,!translations,!userOrganisationUnit,!userOrganisationUnitChildren,!userOrganisationUnitGrandChildren'
        }
      }
    }

    const i = await this.engine.query(query1);
    return i.item
  }

  get selectedDashboards() {
    return this.dashboards.filter(dash => {
      return this.assignedItemStore.state.indexOf(dash.id) !== -1;
    });
  }

  get selectedItems() {
    const items = this.selectedDashboards.map(dashboard => {
      const items = dashboard.dashboardItems.filter(item => item.selected);
      return items
    });

    return flatten(items)
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
  fetchDashboards: action,
  selectedDashboards: computed,
  selectedItems: computed
})