import React, { useState }  from 'react';
import ReactSearchBox from 'react-search-box';
import {PresentationGrid} from './presentations/PresentationGrid';
import {PresentationList} from './presentations/PresentationList';
import {PresentationSingle} from './presentations/PresentationSingle';
import { List, GridOn, CheckBoxOutlineBlankOutlined } from "@material-ui/icons";
// import { HomePage } from './components/HomePage';
// import Link from '@material-ui/core/Link';
// import AddIcon from '@material-ui/icons/Add';
// import AddIcon from '@material-ui/icons/Add';
// import Fab from '@material-ui/core/Fab';
// import { HomePage } from '../HomePage';


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


export const Presentations = ({viewPresentationGrid,}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const changePage = (page) =>{
        setCurrentPage(page)
    }

    const showPage = () =>{
        switch (currentPage){
            case 1:
                return <PresentationList />
            case 2:
                return <PresentationGrid />
            case 3:
                return <PresentationSingle/>
            default:
                return <PresentationList/>
        }

    }
    
    return (
        <div className="h-auto mt-4">
            <div className="flex px-16 py-4">
                <div className="flex">
                    <h1>View as 
                        <List className="text-blue-500" onClick={()=>changePage(1)} /> 
                        <CheckBoxOutlineBlankOutlined onClick={()=>changePage(3)}/>
                        <GridOn onClick={()=>changePage(2)}/>
                    </h1>
                </div>
                <div className="ml-auto">
                    <ReactSearchBox
                        placeholder="Search Presentation"
                    />
                </div>
            </div>

            <div>{showPage()}</div>
        </div>
    )
}