import { Visualization } from '../Visualization';
import { DHIS2Visualization } from '../DHIS2Visualization';
import {
  VISUALIZATION,
  CHART,
  REPORT_TABLE
} from '../../modules/ItemTypes'

export const VisualizationItem = ({ item, height, width }) => {
  const activeType = item.type;
  switch (activeType) {
    case VISUALIZATION:
    case CHART:
    case REPORT_TABLE:
      return <DHIS2Visualization width={width} height={height} item={item.dashboardItemContent} />
    default:
      return <Visualization width={width} height={height} item={item.dashboardItemContent} />

  }
};