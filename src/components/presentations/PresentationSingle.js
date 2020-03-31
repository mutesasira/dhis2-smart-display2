import React, { useEffect } from 'react';
import { LiveTv } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useMst } from '../../context/context';
import { observer } from 'mobx-react';
import { Menu, Dropdown, Pagination } from 'antd';
import { useHistory } from 'react-router-dom';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

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
	largerIcon: {
		height: 160,
	},
	AddIcon: {
		width: 40,
		height: 30,
	},
};


export const PresentationSingle = observer(() => {
	let history = useHistory();
	const store = useMst();

	const present = presentation => () => {
		store.setPresentation(presentation);
		history.push('?page=5');
	};

	const edit = (presentation) => () =>{
		store.setPresentation(presentation)
		history.push('?page=2')
	  }
	  const preview = (presentation) => () =>{
		store.setPresentation(presentation)
		history.push('?page=6')
	
	  }
	useEffect(() => {
		store.setPaging({ presentations: { pageSize: 8, page: 1 } });
	}, [store]);
	return (
		<div className="px-16">
			<div className="text-gray-700 text-center px-4 py-2" >
			<Carousel arrows infinite >
					{store.currentPresentations.map(presentation => {
						const menu = (
							<Menu>
								<Menu.Item key="0" onClick={preview(presentation)}>Preview</Menu.Item>
								<Menu.Item key="1" onClick={present(presentation)} >Present</Menu.Item>
								<Menu.Item key="3" onClick={edit(presentation)}>Edit</Menu.Item>
								<Menu.Item key="4">Sharing Settings</Menu.Item>
								<Menu.Item key="5">Show Details</Menu.Item>
								<Menu.Item key="6">Print</Menu.Item>
								<Menu.Item key="7">Delete</Menu.Item>
							</Menu>
						);

						return (
							<div key={presentation.id}>
									<div className="text-white relative text-center px-4 py-16 bg-blue-500  slideHeight">
										<div>
											<LiveTv
												style={style.largeIcon}
												className=" text-gray-300 py-2 px-2"
											/>
										</div>
										<div className="slideHeightDiv2 bottom-0 inset-x-0 absolute flex bg-transparent bg-blue-600 hover:bg-blue-700  hover:text-white ">
											<div className="text-white text-center font-bold text-2xl ml-64">
												{presentation.name}
											</div>
											<Dropdown
												className="text-purple-900 hover:text-white"
												overlay={menu}
												trigger={['click']}>
												<MoreVertIcon
													className="text-right ml-auto "
													style={{
														fontSize: 32,
													}}
												/>
											</Dropdown>
											
										</div>
									</div>
							</div>
						);
					})}
				</Carousel>
			</div>
			<Fab size="medium" style={style} color="primary">
				<AddIcon />
			</Fab>
		</div>
	);
});
