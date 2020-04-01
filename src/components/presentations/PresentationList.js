import React, { useEffect } from 'react';
import { LiveTv } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import { MoreOutlined } from '@ant-design/icons';
import Fab from '@material-ui/core/Fab';
import { useMst } from '../../context/context';
import { observer } from 'mobx-react';
import { Menu, Dropdown, Row, Col, Pagination } from 'antd';
import { useHistory } from 'react-router-dom';
//import Preview from "../menus/Preview"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

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
function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}
const useStyles = makeStyles(theme => ({
	paper: {
		position: 'absolute',
		width: 800,
		height: 800,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

export const PresentationList = observer(() => {
	let history = useHistory();
	const classes = useStyles();
	const [modalStyle] = React.useState(getModalStyle);
	const store = useMst();
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const present = presentation => () => {
		store.setPresentation(presentation);
		history.push('?page=5');
	};
	const edit = presentation => () => {
		store.setPresentation(presentation);
		history.push('?page=2');
	};

	// const preview = presentation => () => {
	// 	store.setPresentation(presentation);
	// 	history.push('?page=6');
	// };
	const body = (
		<div style={modalStyle} className={classes.paper}>
			<div className="py-8">
				<h1 className="px-24 text-3xl py-8">
					Comparison of Testing and Positivity Rates (Presentation
					Name)
				</h1>
				<Carousel
					arrows
					infinite
					className="grid grid-cols-2 gap-4 px-12 ">
					<div className="grid grid-cols-2 gap-2  slideHeight">
						<Card className="w-full h-auto ">
							<CardContent className="bg-blue-300 h-full">
								<p>map (Dashboard Item)</p>
							</CardContent>
						</Card>
						<Card className="w-full h-full ">
							<CardContent className="bg-blue-300 h-full">
								<p>Chart (Dashboard Item)</p>
							</CardContent>
						</Card>
					</div>
				</Carousel>
			</div>
		</div>
	);

	useEffect(() => {
		store.setPaging({ presentations: { pageSize: 3, page: 1 } });
	}, [store]);
	return (
		<div className={style.overlay2}>
			<div className="flex flex-col">
				<Modal
					open={open}
					onClose={handleClose}>
					{body}
				</Modal>
				{store.currentPresentations.map(presentation => {
					const menu = (
						<Menu>
							<Menu.Item key="0" onClick={handleOpen}>
								Preview
							</Menu.Item>
							<Menu.Item key="1" onClick={present(presentation)}>
								Present
							</Menu.Item>
							<Menu.Item key="3" onClick={edit(presentation)}>
								Edit
							</Menu.Item>
							<Menu.Item key="4">Sharing Settings</Menu.Item>
							<Menu.Item key="5">Show Details</Menu.Item>
							<Menu.Item key="6">Print</Menu.Item>
							<Menu.Item key="7">Delete</Menu.Item>
						</Menu>
					);
					return (
						<div
							key={presentation.id}
							className="flex flex-col px-16">
							<Row>
								<Col span={24}>
									<div className="flex mb-2">
										<div className="w-full md:w-1/6  bg-blue-400 text-center">
											<h3 className="font-extrabold">
												<LiveTv
													style={style.largeIcon}
													className=" text-gray-300 py-2 px-2"
												/>
											</h3>
										</div>
										<div className="w-full md:w-5/6  bg-white text-left text-gray-200">
											<div className="h-auto w-full p-4 bg-gray-200">
												<h1 className="text-blue-600 text-2xl w-full flex truncate ">
													{presentation.name}

													<Dropdown
														overlay={menu}
														trigger={['click']}>
														<MoreOutlined
															className="text-right ml-auto"
															style={{
																fontSize: 24,
															}}
														/>
													</Dropdown>
												</h1>
											</div>
											<div className="h-auto w-full p-4 bg-gray-200 text-black ">
												<h2>
													{presentation.description}{' '}
												</h2>
											</div>
										</div>
									</div>
								</Col>
							</Row>
						</div>
					);
				})}
				<div className="px-16 mt-8">
					<Pagination
						pageSizeOptions={[
							'3',
							'6',
							'9',
							'15',
							'18',
							'24',
							'27',
							'30',
						]}
						current={store.paging.presentations.page}
						pageSize={store.paging.presentations.pageSize}
						showSizeChanger
						showQuickJumper
						onShowSizeChange={store.perPageChange('presentations')}
						total={store.presentations.length}
						onChange={store.pagingChange('presentations')}
					/>
				</div>
				<Fab
					size="medium"
					style={style}
					color="primary"
					onClick={() => history.push('?page=2')}>
					<AddIcon />
				</Fab>
			</div>
		</div>
	);
});
