import React from 'react';
import { LiveTv } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Pagination } from 'antd';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { observer } from 'mobx-react';
import { MoreOutlined } from '@ant-design/icons';

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

function itemRender(current, type, originalElement) {
	if (type === 'prev') {
		return <a>Previous</a>;
	}
	if (type === 'next') {
		return <a>Next</a>;
	}
	return originalElement;
}
const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			marginTop: theme.spacing(2),
		},
	},
}));

export const PresentationGrid = observer(({ newPresentation }) => {
	const classes = useStyles();
	return (
		<div className="px-16">
			<div class="flex">
				<div className="flex-1 text-gray-700 text-center bg-blue-500 px-4 py-2 m-2 h-48">
				<LiveTv
				style={style.largeIcon}
				className=" text-gray-300 py-2 px-2"
			/>
				</div>
				<div className="flex-1 text-gray-700 text-center bg-blue-500 px-4 py-2 m-2 h-48">
				<LiveTv
				style={style.largeIcon}
				className=" text-gray-300 py-2 px-2"
			/>
				</div>
				<div className="flex-1 text-gray-700 text-center bg-blue-500 px-4 py-2 m-2 h-48">
				<LiveTv
				style={style.largeIcon}
				className=" text-gray-300 py-2 px-2"
			/>
				</div>
				<div className="flex-1 text-gray-700 text-center bg-blue-500 px-4 py-2 m-2 h-48">
				<LiveTv
				style={style.largeIcon}
				className=" text-gray-300 py-2 px-2"
			/>
				</div>
			</div>
			<div className="flex ">
				<div class="flex-1 text-gray-700 text-center bg-blue-500 px-4 py-2 m-2 h-48">
				<LiveTv
				style={style.largeIcon}
				className=" text-gray-300 py-2 px-2"
			/>
				</div>
				<div className="flex-1 text-gray-700 text-center bg-blue-500 px-4 py-2 m-2 h-48">
				<LiveTv
				style={style.largeIcon}
				className=" text-gray-300 py-2 px-2"
			/>
				</div>
				<div className="flex-1 text-gray-700 text-center bg-blue-500 px-4 py-2 m-2 h-48">
				<LiveTv
				style={style.largeIcon}
				className=" text-gray-300 py-2 px-2"
			/>
				</div>
				<div className="flex-1 text-gray-700 text-center bg-blue-500 px-4 py-2 m-2 h-48">
				<LiveTv
				style={style.largeIcon}
				className=" text-gray-300 py-2 px-2"
			/>
				</div>
			</div>
			<div className={classes.root}>
				<Pagination total={500} itemRender={itemRender} />
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
});
