import { decorate, observable, action, computed, extendObservable } from "mobx"
import { getEndPointName } from '../modules/ItemTypes'
import { flatten, fromPairs, pick } from 'lodash';

const process = (items) => {
  const p = items.map(item => {
    return [item.id, item]
  });

  return fromPairs(p)
}
export class Presentation {
  id;
  name = '';
  description = '';
  dashboards = [];
  engine;
  transitionDuration = 500;
  slideDuration = 20000;
  transitionModes = ['slide', 'zoom', 'spin', 'fade'];

  setEngine = val => this.engine = val;
  setName = val => this.name = val;
  setDashboards = val => this.dashboards = val;
  setDescription = val => this.description = val;
  setTransitionModes = val => this.transitionModes = val;
  setTransitionDuration = val => this.transitionDuration = val;
  setSlideDuration = val => this.slideDuration = val;
  setId = val => this.id = val;

  onNameChange = e => {
    this.setName(e.target.value)
  }

  onDescriptionChange = e => {
    this.setDescription(e.target.value)
  }

  fetchItem = async (item) => {
    const endpoint = getEndPointName(item.type);
    if (endpoint) {
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
  }

  get selectedItems() {
    const items = this.dashboards.map(dashboard => {
      const items = dashboard.dashboardItems.filter(item => item.selected);
      return items
    });
    return flatten(items)
  }

  get canBeSaved() {
    return pick(this, ['id', 'name', 'dashboards', 'description', 'transitionModes', 'transitionDuration', 'slideDuration'])
  }
}

decorate(Presentation, {
  id: observable,
  name: observable,
  description: observable,
  engine: observable,

  transitionDuration: observable,
  slideDuration: observable,
  transitionMode: observable,

  selectedItems: computed,
  canBeSaved: computed,

  setTransitionModes: action,
  setTransitionDuration: action,
  setSlideDuration: action,
  setId: action,
  dashboards: observable,
  fetchItem: action,
  onDescriptionChange: action,
  onNameChange: action,
  setDashboards: action,
  setDescription: action,
  setEngine: action,
  setName: action,
  transitionModes: observable
})
