import { action, computed, decorate, observable } from 'mobx';
import { itemTypeMap, CHART, MAP, EVENT_CHART, EVENT_REPORT, REPORT_TABLE } from "../modules/ItemTypes";

export class DashboardItemContent {
  id;
  name;
  type;
  interpretations = [];
  dashboardItemType;

  setId = val => this.id = val;
  setName = val => this.name = val;
  setType = val => this.type = val;
  setInterpretations = val => this.interpretations = val;
  setDashboardItemType = val => this.dashboardItemType = val;
  extractMapView = map => map.mapViews && map.mapViews.find(mv => mv.layer.includes(THEMATIC_LAYER));

  get getItemId() {
    return `item-${this.id}`
  }

  hasIntegratedPlugin = type => [CHART, REPORT_TABLE].includes(type);

  itemTypeToExternalPlugin = {
    [MAP]: 'mapPlugin',
    [EVENT_REPORT]: 'eventReportPlugin',
    [EVENT_CHART]: 'eventChartPlugin',
  };


  getPlugin = type => {
    if (this.hasIntegratedPlugin(type)) {
      return true;
    }
    const pluginName = this.itemTypeToExternalPlugin[type];
    return global[pluginName];
  };

  loadPlugin = (plugin, config, credentials) => {
    if (!(plugin && plugin.load)) {
      return;
    }
    plugin.url = credentials.baseUrl;
    plugin.loadingIndicator = true;
    plugin.dashboard = true;
    if (credentials.auth) {
      plugin.auth = credentials.auth;
    }
    plugin.load(config);
  };

  load = async (credentials = { baseUrl: 'http://localhost:8080' }) => {
    const config = {
      id: this.id,
      el: this.getItemId,
    };
    const plugin = this.getPlugin(this.type);
    this.loadPlugin(plugin, config, credentials);
  };

  getVisualizationConfig = (visualization, originalType, activeType) => {
    if (originalType === MAP && originalType !== activeType) {
      const extractedMapView = extractMapView(visualization);

      if (extractedMapView === undefined) {
        return null;
      }

      return getWithoutId({
        ...visualization,
        ...extractedMapView,
        mapViews: undefined,
        type: activeType === CHART ? VIS_TYPE_COLUMN : VIS_TYPE_PIVOT_TABLE,
      });
    } else if (originalType === REPORT_TABLE && activeType === CHART) {
      return getWithoutId({ ...visualization, type: VIS_TYPE_COLUMN });
    } else if (originalType === CHART && activeType === REPORT_TABLE) {
      return getWithoutId({
        ...visualization,
        type: VIS_TYPE_PIVOT_TABLE,
      });
    }
    return getWithoutId(visualization);
  };

}

decorate(DashboardItemContent, {
  id: observable,
  name: observable,
  interpretations: observable,
  type: observable,
  dashboardItemType: observable,

  setId: action,
  setName: action,
  setInterpretations: action,
  setType: action,
  setDashboardItemType: action,
  getItemId: computed

});