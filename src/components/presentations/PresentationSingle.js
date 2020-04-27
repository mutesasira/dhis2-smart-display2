import React, {useEffect} from 'react';
import {LiveTv} from '@material-ui/icons';
import {useMst} from '../../context/context';
import {observer} from 'mobx-react';
import {Menu, Dropdown} from 'antd';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import EditIcon from '@material-ui/icons/Edit';
import TvIcon from '@material-ui/icons/Tv';
import VisibilityIcon from '@material-ui/icons/Visibility';
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
  const store = useMst();
  useEffect(() => {
    store.setPaging({presentations: {pageSize: 0, page: 1}});
  }, [store]);
  return (
    <div className="px-16">
      <div className="text-gray-700 text-center px-4 py-2">
        <Carousel arrows infinite>
          {store.currentPresentations.map((presentation) => {
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
              <div key={presentation.id}
                   className="text-white relative text-center bg-blue-500  slideHeight flex flex-col">
                <div className="text-center mt-40">
                  <LiveTv
                    style={style.largeIcon}
                    className="mma2"
                  />
                </div>
                <div
                  className="cpx bottom-0 inset-x-0 absolute bg-transparent bg-blue-600 hover:bg-blue-700  hover:text-white flex">
                  <div className="w-11/12 flex flex-col text-center ">
                    <span className="text-2xl font-bold font-sans truncate ml-20">
                      {presentation.name}
                    </span>
                    <span className="text-base font-sans truncate ml-20">
                      {presentation.description}
                    </span>
                  </div>
                  <Dropdown
                    className="flex-1 ml-auto"
                    overlay={menu}
                    trigger={['click']}>
                    <MoreVertIcon
                      className="float-right hover:text-blue"
                      style={{
                        fontSize: 40,
                        color: 'blue',
                      }}
                    />
                  </Dropdown>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
});
