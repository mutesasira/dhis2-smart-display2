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
import { LiveTv } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
}));



export const DashboardItems = observer(() => {
	const { settings } = useMst();

	const selectedDashboards = settings.dashboards.filter(dash => {
		return settings.assignedItemStore.state.indexOf(dash.id) !== -1;
	});

	const [currentDashboard, setCurrentDashboard] = useState(
		selectedDashboards.length > 0 ? selectedDashboards[0] : {}
	);

	const classes = useStyles();
	const [checked, setChecked] = React.useState([0]);

	const displayAvatar = (endpoint) => {
		// console.log(endpoint);
		if (endpoint === 'REPORT_TABLE' || endpoint === 'EVENT_REPORT') {
			return <ViewList/>
		} else if (endpoint === 'CHART' || endpoint === 'EVENT_CHART') {
			return <InsertChart/>
		} else if (endpoint === 'MAP') {
			return <Public/>
		} else {
			return <Help/>
		}
	};

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
				{
					dashboard.dashboardItems.map((item) => {
				<div className="w-full md:w-3/4 bg-red p-4 pt-10">
					<div className="w-full p-4 flex md:flex-row flex-wrap text-left bg-blue-500 text-white">
						Delivery <MoreVertIcon className="text-black  ml-12" />
					</div>
					<div key={d.id}>
						{
							//JSON.stringify(currentDashboard)
							// JSON.parse(currentDashboard, null, 2)
							d.name
						}
						<List>
							{item.name.map((d) => {
								return (
									<ListItem
										key={key}
										role={undefined}
										dense
										className="fullList">

										<ListItemText
											// primary={extractFavorite(item).name}
										/>
										<Checkbox
											checked={d.selected}
											onChange={d.handleChange}
										/>
									</ListItem>
								);
							})}
						</List>
					</div>

					<div>
						<List className={classes.root}>
							{[0, 1, 2, 3].map(value => {
								const dsbId = 'checkbox-list-label-${value}';

								return (
									<ListItem
										key={value}
										role={undefined}
										dense
										button
										onClick={handleToggle(value)}>
										<ListItemIcon>
											<Checkbox
												edge="start"
												checked={
													checked.indexOf(value) !==
													-1
												}
												tabIndex={-1}
												disableRipple
												inputProps={{
													'aria-labelledby': dsbId,
												}}
											/>
										</ListItemIcon>
										<ListItemText
											id={dsbId}
											primary={JSON.stringify(
												setCurrentDashboard,
												null,
												2
											)}
										/>
										<ListItemSecondaryAction>
											<IconButton
												edge="end"
												aria-label="comments">
												<LiveTv />
											</IconButton>
										</ListItemSecondaryAction>
									</ListItem>
								);
							})}
						</List>
					</div>
				</div>;
			    })}
			</div>
		</div>
	);
});
