import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		maxWidth: 500,
		backgroundColor: theme.palette.background.paper,
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9,
		marginTop: '30',
	},
}));

export const EditContents = () => {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;
	return (
		<div className="h-auto px-4">
			<div className="flex md:flex-row flex-wrap h-full">
				<div className="w-full md:w-1/5 bg-gray p-4 ">
					<div className="py-2">
						<Card className={classes.root}>
							<CardContent>
								<p>Image</p>
								<img src="/assets/images/map.gif" />
							</CardContent>
							<CardActions></CardActions>
						</Card>
					</div>
					<div className="py-2">
						<Card className={classes.root}>
							<CardContent>
								<p>Image</p>
							</CardContent>
							<CardActions></CardActions>
						</Card>
					</div>
				</div>
				<div className="w-full md:w-2/5 bg-red p-4 pt-10">
					<div className="py-2">
						<Card className={classes.root}>
							<CardContent>
								<p>Image</p>
								<img src="/assets/images/map.gif" />
							</CardContent>
							<CardActions></CardActions>
						</Card>
					</div>
				</div>
				<div className="w-full md:w-2/5 bg-gray p-4 ">
					<div className="py-2">
						<Card className={classes.root}>
							<CardContent>
								<p>Image</p>
								<img src="/assets/images/map.gif" alt = "Image loading" />
							</CardContent>
							<CardActions></CardActions>
						</Card>
					</div>
				</div>
			</div>
		</div>
	);
};
