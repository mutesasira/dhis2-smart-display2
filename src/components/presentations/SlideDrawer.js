import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';


const drawerWidth = 320;

const useStyles = makeStyles((theme) => ({
  root1: {
    display: 'flex',

  },
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    height:30,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    
  },
  
}));

export default function SlideDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root1}>
      <IconButton
        onClick={handleDrawerOpen}
        className={clsx(open)}>
        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
     
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
           <ChatOutlinedIcon className="pr-2"/><h1 className = "text-xl font-bold">Interpretations</h1>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          
        </div>
        <Divider />
        <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Steven Ocaya" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Antenatal Map"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Omiel Patrick
              </Typography>
              {" Hi, Could you describe what the map shows?"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Omiel Patric" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Antenatal Map Explained"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ocaya Stphen
              </Typography>
              {" Thanx, This map shows antenatal notification rates in the country during the year 2030"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Omiel Patric" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Antenatal Map Explained"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ocaya Stphen
              </Typography>
              {" Thanx, This map shows antenatal notification rates in the country during the year 2030"}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Omiel Patric" src="" />
        </ListItemAvatar>
        <ListItemText
          primary=" Antenatal Map Explained"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ocaya Stphen
              </Typography>
              {" Thanx, This map shows antenatal notification rates in the country during the year 2030"}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Omiel Patric" src="" />
        </ListItemAvatar>
        <ListItemText
          primary="Antenatal Map Explained"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ocaya Stphen
              </Typography>
              {"Thanx, This map shows antenatal notification rates in the country during the year 2030"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Drawer>
    </div>
  );
}
