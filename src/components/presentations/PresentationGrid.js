import React from 'react';
import { LiveTv } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { Pagination } from 'antd';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { MoreOutlined } from '@ant-design/icons';
import { useMst } from '../../context/context';
import { observer } from 'mobx-react';
import { Menu, Dropdown, Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';

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
	let history = useHistory();
	const store = useMst();

	const present = presentation => () => {
		store.setPresentation(presentation);
		history.push('?page=6');
	};
	return (
		<div className="px-16">
			<div className="grid grid-flow-col grid-cols-4 grid-rows-2 gap-4 ">
				{store.presentations.map(presentation => {
					const menu = (
						<Menu>
							<Menu.Item key="0">Preview</Menu.Item>
							<Menu.Item key="1" onClick={present(presentation)}>
								Present
							</Menu.Item>
							<Menu.Item key="3">Edit</Menu.Item>
							<Menu.Item key="4">Sharing Settings</Menu.Item>
							<Menu.Item key="5">Show Details</Menu.Item>
							<Menu.Item key="6">Print</Menu.Item>
							<Menu.Item key="7">Delete</Menu.Item>
						</Menu>
					);

					return (
						<div>
						<div key={presentation.id}>
							<div className="text-gray-700 relative  text-center px-4 py-2 bg-blue-500 h-48">
								<div>
									<LiveTv
										style={style.largeIcon}
										className=" text-gray-300 py-2 px-2"
									/>
								</div>
								<div className="h-12 bg-gray-500 bottom-0 inset-x-0 absolute flex items-center">
									{presentation.name}
									<Dropdown
										overlay={menu}
										trigger={['click']}>
										<MoreVertIcon
											className="text-right ml-auto"
											style={{ fontSize: 24 }}
										/>
									</Dropdown>
								</div>
							</div>
						</div></div>
					);
				})}
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
