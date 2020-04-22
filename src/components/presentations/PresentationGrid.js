import React, { useEffect } from 'react';
import { LiveTv } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useMst } from '../../context/context';
import { observer } from 'mobx-react';
import { Menu, Dropdown, Pagination } from 'antd';
import TvIcon from '@material-ui/icons/Tv';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import ShareIcon from '@material-ui/icons/Share';
import DetailsIcon from '@material-ui/icons/Details';
import PrintIcon from '@material-ui/icons/Print';
import DeleteIcon from '@material-ui/icons/Delete';
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

export const PresentationGrid = observer(() => {
	const store = useMst();

	useEffect(() => {
		store.setPaging({ presentations: { pageSize: 8, page: 1 } });
	}, [store]);
	return (
		<div className="px-16">
			<div className="grid grid-cols-4 gap-4">
				{store.currentPresentations.map(presentation => {
					const menu = (
						<Menu>
						<Menu.Item key="0" onClick={store.preview(presentation)}><VisibilityIcon className="pr-2"/>Preview</Menu.Item>
						<Menu.Item key="1" onClick={store.present(presentation)}><TvIcon className="pr-2"/>Present</Menu.Item>
						<Menu.Item key="3" onClick={store.edit(presentation)}><EditIcon className="pr-2"/>Edit</Menu.Item>
						<Menu.Item key="4"><ShareIcon className="pr-2"/>Sharing Settings</Menu.Item>
						<Menu.Item key="5"><DetailsIcon className="pr-2"/>Show Details</Menu.Item>
						<Menu.Item key="6"><PrintIcon className="pr-2"/>Print</Menu.Item>
						<Menu.Item key="7" onClick={store.deletePresentation(presentation)}><DeleteIcon className="pr-2"/>Delete</Menu.Item>
						</Menu>
					);
					return (
						<div key={presentation.id}>
							<div className="text-gray-700 relative text-center px-4 py-2 bg-blue-500 h-48">
								<div>
									<LiveTv
										style={style.largeIcon}
										className=" text-gray-300 py-2 px-2"
									/>
								</div>
								<div
									className="h-12 bottom-0 inset-x-0 absolute flex hover:bg-blue-700 hover:text-white cpx ">
									<div className="text-white truncate alignGrid font-sans text-xl py-2 text-center z-40">
										{presentation.name}
									</div>
									<Dropdown
									className = "text-blue-700 z-40 hover:text-white "
										overlay={menu}
										trigger={['click']}>
										<MoreVertIcon
											className="text-right ml-auto hover:text-white"
											style ={{fontSize:30,
												color:'blue',
											  }}
										/>
									</Dropdown>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className="mt-8">
				<Pagination
					pageSizeOptions={[
						'3',
						'6',
            '8',
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

		</div>
	);
});
