import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useMst } from '../../context/context';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChartIcon from '@material-ui/icons/InsertChart';
import MapIcon from '@material-ui/icons/Public';
import ExtensionIcon from '@material-ui/icons/Extension';
import DescriptionIcon from '@material-ui/icons/Description';
import PersonIcon from '@material-ui/icons/Person';
import FontDownloadIcon from '@material-ui/icons/FontDownload';
import EmailIcon from '@material-ui/icons/Email';
import CropFreeIcon from '@material-ui/icons/CropFree';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import TableIcon from '@material-ui/icons/TableChart';
import { Checkbox } from 'antd';
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
  SPACER,
} from '../../modules/ItemTypes';
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';



// const keys = () =>{
//   return (
//     <div>can we talk about the keys since emma had the upper office keys and you know sometimes we might need to work over time</div>
//   )
// }



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    maxHeight: 360,
    overflow: 'auto',
  },
  mainBar: {
    width: '100%',
    maxHeight: 300,
    overflow: 'auto',
  },
  icon: {
    borderRadius: 2,
    width: 16,
    height: 16,
    boxShadow:
      'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
}));

const theme = createMuiTheme({
  overrides: {
    '.Mui-checked': {
      color: 'red',
    },
  },
});
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
};

export const DashboardItems = observer(() => {
  const { currentPresentation } = useMst();
  const [currentDashboard, setCurrentDashboard] = useState(currentPresentation.dashboards.length > 0? currentPresentation.dashboards[0]: {});
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
            <div className={classes.mainBar}>
              <div className=" bg-white rounded max-w-xs w-full shadow-lg  leading-normal mb-64">
                {currentPresentation.dashboards.map(
                  dashboard => (
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
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-auto md:w-3/4 bg-red p-4 pt-10 h-56">
          <div className="w-auto p-4 flex  text-left bg-blue-500 text-white">
            {currentDashboard.name}
            <MoreVertIcon className="text-black  text-right" />
          </div>
          <div className="w-auto">
            <List className={classes.root}>
              {currentDashboard.dashboardItems.map(
                (dashboardItem, i) => {
                  const dsbId = `checkbox-list-label-${dashboardItem.id}`;

                  return (
                    <MuiThemeProvider theme={theme}>
                      <ListItem
                        key={`${dashboardItem.id}${i}`}
                        role={undefined}
                        dense
                        button
                        onClick={handleToggle(
                          dashboardItem.id
                        )}
                        style={dashboardItem.style}>
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checkedIcon={
                              <span
                                className={clsx(
                                  classes.icon,
                                  classes.checkedIcon
                                )}
                              />
                            }
                            checked={
                              dashboardItem.selected
                            }
                            onChange={
                              dashboardItem.handleChange
                            }
                            tabIndex={-1}
                            disableRipple
                            icon={
                              <span
                                className={
                                  classes.icon
                                }
                              />
                            }
                            inputProps={{
                              'aria-label': dsbId,
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            dashboardItem
                              .dashboardItemContent
                              .name
                          }
                        />
                        <ListItemSecondaryAction>
                          <IconButton
                            edge="end"
                            aria-label="comments">
                            {getItemIcon(
                              dashboardItem.type
                            )}
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    </MuiThemeProvider>
                  );
                }
              )}
            </List>
            <span className="text-bold">
              {' '}
              {currentDashboard.selectedItems} selected
						</span>
          </div>
        </div>
      </div>
    </div>
  );
});
