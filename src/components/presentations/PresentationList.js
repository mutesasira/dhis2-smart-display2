import React from 'react';
import { LiveTv } from '@material-ui/icons';
//import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { MoreOutlined } from '@ant-design/icons';
import Fab from '@material-ui/core/Fab';
import { Pagination } from 'antd';
import { Row, Col } from 'antd';

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

function itemRender(current, type, originalElement) {
	if (type === 'prev') {
		return <a>Previous</a>;
	}
	if (type === 'next') {
		return <a>Next</a>;
	}
	return originalElement;
}

export const PresentationList = ({ newPresentation }) => {
	const classes = useStyles();
	return (
		<div className="flex flex-col px-16">
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
								<h1 className="text-blue-600 text-2xl w-full">
									Description of the demonstration of the XXX
									program 
									<MoreOutlined className="text-right glistcss"/></h1>
							</div>
							<div className="h-auto w-full p-4 bg-gray-200 text-black ">
								<h2>
									This is a very long test that is going to be
									describing the demonstartion of the
									presenation of the dashboard in question
								</h2>
							</div>
						</div>
					</div>
				</Col>
			</Row>
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
								<h1 className="text-blue-600 text-2xl">
									Description of the demonstration of the XXX
									program <MoreOutlined className="text-right glistcss"/>
								</h1>
							</div>
							<div className="h-auto w-full p-4 bg-gray-200 text-black ">
								<h2>
									This is a very long test that is going to be
									describing the demonstartion of the
									presenation of the dashboard in question
								</h2>
							</div>
						</div>
					</div>
				</Col>
			</Row>
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
								<h1 className="text-blue-600 text-2xl">
									Description of the demonstration of the XXX
									program <MoreOutlined className="text-right glistcss"/>
								</h1>
							</div>
							<div className="h-auto w-full py-4 p-4 bg-gray-200 text-black ">
								<h2>
									This is a very long test that is going to be
									describing the demonstartion of the
									presenation of the dashboard in question
								</h2>
							</div>
						</div>
					</div>
				</Col>
			</Row>

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
};
