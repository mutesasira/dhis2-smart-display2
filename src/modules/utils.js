import { isObject } from 'lodash';
import { CHART, EVENT_CHART, EVENT_REPORT, MAP, REPORT_TABLE } from "./ItemTypes";
export const extractFavorite = item => {
  if (!isObject(item)) {
    return null;
  }

  switch (item.type) {
    case REPORT_TABLE:
      return item.reportTable;
    case CHART:
      return item.chart;
    case MAP:
      return item.map;
    case EVENT_REPORT:
      return item.eventReport;
    case EVENT_CHART:
      return item.eventChart;
    default:
      return (
        item.reportTable ||
        item.chart ||
        item.map ||
        item.eventReport ||
        item.eventChart ||
        {}
      );
  }
};