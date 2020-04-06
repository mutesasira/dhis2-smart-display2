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
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { EyeFilled } from '@ant-design/icons';
import TvIcon from '@material-ui/icons/Tv';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import ShareIcon from '@material-ui/icons/Share';
import DetailsIcon from '@material-ui/icons/Details';
import PrintIcon from '@material-ui/icons/Print';
import DeleteIcon from '@material-ui/icons/Delete';
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

	const present = (presentation) => () => {
		store.setPresentation(presentation);
		history.push('?page=5');
	};

	const edit = (presentation) => () => {
		store.setPresentation(presentation);
		history.push('?page=2');
	};

	const preview = (presentation) => () => {
		store.setPresentation(presentation);
		store.showPreview();
	};
	useEffect(() => {
		store.setPaging({ presentations: { pageSize: 8, page: 1 } });
	}, [store]);
	return (
		<div className="px-16">
			<div className="text-gray-700 text-center px-4 py-2">
				<Carousel arrows infinite>
					{store.currentPresentations.map((presentation) => {
						const menu = (
							<Menu>
								<Menu.Item
									key="0"
									onClick={preview(presentation)}>
									<VisibilityIcon />
									Preview
								</Menu.Item>
								<Menu.Item
									key="1"
									onClick={present(presentation)}>
									<TvIcon />
									Present
								</Menu.Item>
								<Menu.Item key="3" onClick={edit(presentation)}>
									<EditIcon />
									Edit
								</Menu.Item>
								<Menu.Item key="4">
									<ShareIcon />
									Sharing Settings
								</Menu.Item>
								<Menu.Item key="5">
									<DetailsIcon />
									Show Details
								</Menu.Item>
								<Menu.Item key="6">
									<PrintIcon />
									Print
								</Menu.Item>
								<Menu.Item key="7">
									<DeleteIcon />
									Delete
								</Menu.Item>
							</Menu>
						);

						return (
							<div key={presentation.id}>
								<div className="text-white relative text-center bg-blue-500  slideHeight">
									<div className="pt-20">
										<LiveTv
											style={style.largeIcon}
											className=" text-gray-300"
										/>
									</div>
										<div className=" grid grid-rows-2 grid-flow-col  bottom-0 inset-x-0 absolute bg-transparent bg-blue-600 hover:bg-blue-700  hover:text-white ">
											<div className="text-2xl font-bold font-serif " >
                          {presentation.name}
                          <Dropdown
                      overlay={menu}
                      trigger={['click']}>
                      <MoreOutlined
                        className="float-right font-bold"
                        style ={{fontSize:30,
                          color:'blue',
                        }}
                      />
                    </Dropdown>
											</div>
											<div className = "text-base font-serif">
                        {presentation.description}
                        
											</div>
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
