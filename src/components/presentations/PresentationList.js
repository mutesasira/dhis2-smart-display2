import React, { useEffect } from 'react';
import { LiveTv } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import { MoreOutlined } from '@ant-design/icons';
import Fab from '@material-ui/core/Fab';
import { useMst } from '../../context/context';
import { observer } from 'mobx-react';
import { Menu, Dropdown, Row, Col, Pagination } from 'antd';
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
              <Menu.Item key="0" onClick={preview(presentation)}>
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
