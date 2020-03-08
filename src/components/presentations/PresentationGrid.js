import React from 'react';
import { LiveTv } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Pagination from '@material-ui/lab/Pagination';

const style = {
	margin: 0,
	top: 'auto',
	right: 40,
	bottom: 40,
	left: 'auto',
	position: 'fixed',

	largeIcon: {
		width: 100,
		height: 100,
		align: 'center',
	},
	AddIcon: {
		width: 40,
		height: 30,
	},
};

const useStyles = makeStyles(theme => ({
	root: {
	  '& > *': {
		marginTop: theme.spacing(2),
	  },
	},
  }));
export const PresentationGrid = ({ newPresentation }) => {
	const classes = useStyles();
	const iconStyles = {
		largeIcon: {
			width: 80,
			height: 65,
		},
		AddIcon: {
			width: 40,
			height: 30,
		},
	};
	return (
		<div className="flex flex-col px-16">
			<div>
				<Grid container spacing={3}>
					<Grid item xs={6} sm={3}>
						<div class=" max-w-sm hover:bg-blue-400 rounded overflow-hidden shadow-lg h-48 bg-blue-500">
							<div className="align">
								<LiveTv style={iconStyles.largeIcon} />
							</div>
							<div className="content-right md:h-1/4">
								<MoreVertIcon/>
							</div>
						</div>
					</Grid>
					<Grid item xs={6} sm={3}>
						<div class=" max-w-sm hover:bg-blue-400 rounded overflow-hidden shadow-lg h-48 bg-blue-500">
							<div className="align">
								<LiveTv style={iconStyles.largeIcon} />
							</div>
							<div className="content-right md:h-1/4">
								<MoreVertIcon/>
							</div>
						</div>
					</Grid>
					<Grid item xs={6} sm={3}>
						<div class=" max-w-sm hover:bg-blue-400 rounded overflow-hidden shadow-lg h-48 bg-blue-500">
							<div className="align">
								<LiveTv style={iconStyles.largeIcon} />
							</div>
							<div className="content-right md:h-1/4">
								<MoreVertIcon/>
							</div>
						</div>
					</Grid>
					<Grid item xs={6} sm={3}>
						<div class=" max-w-sm hover:bg-blue-400 rounded overflow-hidden shadow-lg h-48 bg-blue-500">
							<div className="align">
								<LiveTv style={iconStyles.largeIcon} />
							</div>
							<div className="content-right md:h-1/4">
								<MoreVertIcon/>
							</div>
						</div>
					</Grid>
					<Grid item xs={6} sm={3}>
						<div class=" max-w-sm hover:bg-blue-400 rounded overflow-hidden shadow-lg h-48 bg-blue-500">
							<div className="align">
								<LiveTv style={iconStyles.largeIcon} />
							</div>
							<div className="content-right md:h-1/4">
								<MoreVertIcon/>
							</div>
						</div>
					</Grid>
					<Grid item xs={6} sm={3}>
						<div class="max-w-sm hover:bg-blue-400 rounded overflow-hidden shadow-lg h-48 bg-blue-500">
							<div className="align">
								<LiveTv style={iconStyles.largeIcon} />
							</div>
							<div className="content-right md:h-1/4">
								<MoreVertIcon/>
							</div>
						</div>
					</Grid>
					<Grid item xs={6} sm={3}>
						<div class="max-w-sm hover:bg-blue-400 rounded overflow-hidden shadow-lg h-48 bg-blue-500">
							<div className="align">
								<LiveTv style={iconStyles.largeIcon} />
							</div>
							<div className="content-right md:h-1/4">
								<MoreVertIcon/>
							</div>
						</div>
					</Grid>
					<Grid item xs={6} sm={3}>
						<div class="max-w-sm hover:bg-blue-400 rounded overflow-hidden shadow-lg h-48 bg-blue-500">
							<div className="align">
								<LiveTv style={iconStyles.largeIcon} />
							</div>
							<div className="content-right md:h-1/4">
								<MoreVertIcon/>
							</div>
						</div>
					</Grid>
				</Grid>
				<div className={classes.root}>
					<Pagination count={20} color="primary" />
				</div>
			</div>
			<Fab
				size="medium"
				style={style}
				color="primary"
				onClick={newPresentation}>
				<AddIcon />
			</Fab>
		</div>
	);
};
