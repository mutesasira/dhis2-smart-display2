import React from 'react';
import { LiveTv } from '@material-ui/icons';
import Pagination from '@material-ui/lab/Pagination';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { useMst } from '../../context/context';
import { MoreOutlined } from '@ant-design/icons';
import { observer } from 'mobx-react';
import { Menu, Dropdown } from 'antd';

const style = {
  margin: 0,
  top: 'auto',
  right: 40,
  bottom: 40,
  left: 'auto',
  position: 'fixed',

  largeIcon: {
    height: '80%',
    align: 'center',
    margin: 0,
    padding: 0
  },
  AddIcon: {
    width: 40,
    height: 30,
  },
};

export const PresentationList = observer(() => {
  const store = useMst();

  return (
    <div className="flex flex-col px-16">
      {store.presentations.map(presentation => {
        const menu = (
          <Menu>
            <Menu.Item key="0">Preview</Menu.Item>
            <Menu.Item key="1" onClick={store.present(presentation)}>Present</Menu.Item>
            <Menu.Item key="3">Edit</Menu.Item>
            <Menu.Item key="4">Sharing Settings</Menu.Item>
            <Menu.Item key="5">Show Details</Menu.Item>
            <Menu.Item key="6">Print</Menu.Item>
            <Menu.Item key="7">Delete</Menu.Item>
          </Menu>
        );
        return <div key={presentation.id} className="flex mb-2">
          <div className="bg-blue-400 h-32 w-32 flex items-center text-gray-700">
            <LiveTv style={{ fontSize: '64px', display: 'flex', alignItems: 'center' }} />
          </div>
          <div className="bg-white text-left h-32 w-full">
            <div className="w-full p-4 bg-gray-200 flex">
              <div className="text-blue-600 text-2xl">
                {presentation.name}
              </div>
              <div className="ml-auto">
                <Dropdown overlay={menu} trigger={['click']}><MoreOutlined style={{ fontSize: 24 }} /></Dropdown>
              </div>
            </div>
            <div className="w-full p-4 bg-gray-200 text-black ">
              <h2>
                {presentation.description}
              </h2>
            </div>
          </div>
        </div>
      })}
      <div>
        <Pagination count={20} color="primary" />
      </div>
      <Fab size="medium" style={style} color="primary" onClick={() => store.setCurrentPage(2)}>
        <AddIcon />
      </Fab>
    </div>
  );
});
