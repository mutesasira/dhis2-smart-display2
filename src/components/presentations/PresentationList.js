import React from 'react';
import { LiveTv } from '@material-ui/icons';
//import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import AddIcon from '@material-ui/icons/Add';
import { MoreOutlined } from '@ant-design/icons';
import Fab from '@material-ui/core/Fab';
import { useMst } from '../../context/context';
import { observer } from 'mobx-react';
import { Menu, Dropdown } from 'antd';
import { useHistory } from "react-router-dom";
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

export const PresentationList = observer(() => {
  let history = useHistory();
  const store = useMst();

  const present = (presentation) => () => {
    store.setPresentation(presentation);
    history.push('/slides')
  }
  return (
    <div className="flex flex-col px-16">
      {store.presentations.map(presentation => {
        const menu = (
          <Menu>
            <Menu.Item key="0">Preview</Menu.Item>
            <Menu.Item key="1" onClick={present(presentation)}>Present</Menu.Item>
            <Menu.Item key="3">Edit</Menu.Item>
            <Menu.Item key="4">Sharing Settings</Menu.Item>
            <Menu.Item key="5">Show Details</Menu.Item>
            <Menu.Item key="6">Print</Menu.Item>
            <Menu.Item key="7">Delete</Menu.Item>
          </Menu>
        );
        return <div key={presentation.id} className="flex flex-col px-16">
		<Row>
			<Col span={24}>
				<div className="flex mb-2">
					<div className="w-full md:w-1/6  bg-blue-400 text-center">
							<LiveTv
								style={style.largeIcon}
								className=" text-gray-300 py-2 px-2"
							/>
					</div>
					<div className="w-full md:w-5/6  bg-white text-left text-gray-200">
						<div className="h-auto w-full p-4 bg-gray-200">
							<h1 className="text-blue-600 text-2xl w-full">
								Description of the demonstration of the XXX
								program 
								<Dropdown overlay={menu} trigger={['click']}><MoreOutlined className="text-right glistcss" style={{ fontSize: 24 }} /></Dropdown>
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
							<LiveTv
								style={style.largeIcon}
								className=" text-gray-300 py-2 px-2"
							/>
					</div>
					<div className="w-full md:w-5/6  bg-white text-left text-gray-200">
						<div className="h-auto w-full p-4 bg-gray-200">
							<h1 className="text-blue-600 text-2xl">
								Description of the demonstration of the XXX
								program <Dropdown overlay={menu} trigger={['click']}><MoreOutlined className="text-right glistcss" style={{ fontSize: 24 }} /></Dropdown>
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
							<LiveTv
								style={style.largeIcon}
								className=" text-gray-300 py-2 px-2"
							/>
					</div>
					<div className="w-full md:w-5/6  bg-white text-left text-gray-200">
						<div className="h-auto w-full p-4 bg-gray-200">
							<h1 className="text-blue-600 text-2xl">
								Description of the demonstration of the XXX
								program <Dropdown overlay={menu} trigger={['click']}><MoreOutlined className="text-right glistcss " style={{ fontSize: 24 }} /></Dropdown>
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
