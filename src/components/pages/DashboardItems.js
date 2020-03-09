import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useMst } from '../../context/context';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TableIcon from '@material-ui/icons/ViewList';
import ChartIcon from '@material-ui/icons/InsertChart';
import MapIcon from '@material-ui/icons/Public';
import ExtensionIcon from '@material-ui/icons/Extension';
import DescriptionIcon from '@material-ui/icons/Description';
import PersonIcon from '@material-ui/icons/Person';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import EmailIcon from '@material-ui/icons/Email';
import CropFreeIcon from '@material-ui/icons/CropFree';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import {
  REPORT_TABLE,
  EVENT_REPORT,
  REPORTS,
  CHART,
  EVENT_CHART,
  MAP,
  APP,
  RESOURCES,
  USERS,
  TEXT,
  MESSAGES,
  SPACER
} from '../../modules/ItemTypes'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const getItemIcon = type => {
  switch (type) {
    case REPORT_TABLE:
    case EVENT_REPORT:
    case REPORTS:
      return <TableIcon />;
    case CHART:
    case EVENT_CHART:
      return <ChartIcon />;
    case MAP:
      return <MapIcon />;
    case APP:
      return <ExtensionIcon />;
    case RESOURCES:
      return <DescriptionIcon />;
    case USERS:
      return <PersonIcon />;
    case TEXT:
      return <FontDownloadIcon />;
    case MESSAGES:
      return <EmailIcon />;
    case SPACER:
      return <CropFreeIcon />;
    default:
      return <NotInterestedIcon />;
  }
}


export const DashboardItems = observer(() => {
  const { currentSetting } = useMst();

  const selectedDashboards = currentSetting.dashboards.filter(dash => {
    return currentSetting.assignedItemStore.state.indexOf(dash.id) !== -1;
  });

  const [currentDashboard, setCurrentDashboard] = useState(
    selectedDashboards.length > 0 ? selectedDashboards[0] : {}
  );

  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div className="h-auto px-4">
      <div className="flex md:flex-row flex-wrap h-full">
        <div className="w-full md:w-1/4 bg-gray p-4 ">
          <div className="font-sans flex items-center justify-center bg-blue-darker w-full py-8">
            <div className="overflow-hidden bg-white rounded max-w-xs w-full shadow-lg  leading-normal">
              {selectedDashboards.map(dashboard => (
                <a
                  key={dashboard.id}
                  href="#"
                  onClick={() =>
                    setCurrentDashboard(dashboard)
                  }
                  className="block group p-4 border-b bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white">
                  <p className="text-base mb-1 text-blue group-hover:text-white">
                    {dashboard.name}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/4 bg-red p-4 pt-10">
          <div className="w-full p-4 flex md:flex-row flex-wrap text-left bg-blue-500 text-white">
            {currentDashboard.name} <MoreVertIcon className="text-black  ml-12" />
          </div>
          <div>
            <List className={classes.root}>
              {currentDashboard.dashboardItems.map((dashboardItem, i) => {
                const dsbId = `checkbox-list-label-${dashboardItem.id}`;
                return (
                  <ListItem
                    key={`${dashboardItem.id}${i}`}
                    role={undefined}
                    dense
                    button
                    onClick={handleToggle(dashboardItem.id)}>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={dashboardItem.selected}
                        onChange={dashboardItem.handleChange}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{
                          'aria-labelledby': dsbId,
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={dashboardItem.dashboardItemContent.name}
                    />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="comments">
                        {getItemIcon(dashboardItem.type)}
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </List>
          </div>
        </div>
      </div>
    </div>
  );
});
