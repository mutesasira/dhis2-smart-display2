import React, { useEffect } from 'react';
import { LiveTv } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { useMst } from '../../context/context';
import { observer } from 'mobx-react';
import { Menu, Dropdown, Row, Col, Pagination } from 'antd';
import { useHistory } from 'react-router-dom';
import TvIcon from '@material-ui/icons/Tv'; 
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import ShareIcon from '@material-ui/icons/Share';
import DetailsIcon from '@material-ui/icons/Details';
import PrintIcon from '@material-ui/icons/Print';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const style = {
  margin: 0,
  top: 'auto',
  right: 40,
  bottom: 40,
  left: 'auto',
  position: 'fixed',

  largeIcon: {
    width: 90,
    height: 90,
    align: 'center',
  },
  AddIcon: {
    width: 40,
    height: 30,
  },
};

export const PresentationList = observer(() => {
  let history = useHistory();
  const store = useMst();

  const present = presentation => () => {
    store.setPresentation(presentation);
    history.push('?page=5');
  };
  const edit = presentation => () => {
    store.setPresentation(presentation);
    history.push('?page=2');
  };

  const preview = presentation => () => {
    store.setPresentation(presentation);
    store.showPreview();

  };

  useEffect(() => {
    store.setPaging({ presentations: { pageSize: 3, page: 1 } });
  }, [store]);

  return (
    <div className={style.overlay2}>
      <div className="flex flex-col">
        {store.currentPresentations.map(presentation => {
          const menu = (
            <Menu>
            <Menu.Item key="0" onClick={preview(presentation)}><VisibilityIcon className="pr-2"/>Preview</Menu.Item>
            <Menu.Item key="1" onClick={present(presentation)}><TvIcon className="pr-2"/>Present</Menu.Item>
            <Menu.Item key="3" onClick={edit(presentation)}><EditIcon className="pr-2"/>Edit</Menu.Item>
            <Menu.Item key="4"><ShareIcon className="pr-2"/>Sharing Settings</Menu.Item>
            <Menu.Item key="5"><DetailsIcon className="pr-2"/>Show Details</Menu.Item>
            <Menu.Item key="6"><PrintIcon className="pr-2"/>Print</Menu.Item>
            <Menu.Item key="7"><DeleteIcon className="pr-2"/>Delete</Menu.Item>
            </Menu>
          );
          return (
				<div key={presentation.id} className="px-16">
					<div className="gridl py-2  h-32">
            <div className="bg-blue-500 text-center w-32 font-extrabold ">
                <LiveTv
                  style={style.largeIcon}
                  className=" mma py-2 px-2"
                />
            
            </div>
						<div className="bg-gray-200 p-2 w-auto ">
              <div className="text-blue-600 text-2xl px-2 break-all font-extrabold">
                  {presentation.name}

                  <Dropdown
                    overlay={menu}
                    trigger={['click']} >
                    <MoreVertIcon
                    className="float-right font-bold"
                    style ={{fontSize:30,
                      color:'blue',
                    }}
                  />
                  </Dropdown>
              </div>
              <div className="pt-4 px-2 text-base">
                  {presentation.description}{' '}
              </div>
						</div>
					</div>
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
