import {React, useState} from "react";
import Choices from "../Components/Choices";
import Course from "../Components/Course";
import Data from "../Data";

function Courses(){
    const [menuItem, setmenuItem] = useState(Data)
    const allCat  = ['All', ...new Set(menuItem.map(item => item.category))]
    const [Buttons, setButton] = useState(allCat)
    const filter = (button) =>{
        if(button ==='All'){
            setmenuItem(menuItem);
            return
        }
        const filterdata =  menuItem.filter(item => item.category === button);
        setmenuItem(filterdata)
    }
    return(
        <div className="Courses">
            <h3>
                Courses specifically for you!
            </h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
            <Choices Buttons={Buttons} filter={filter}></Choices>
            <hr></hr>
            <div className="cards">
            <Course menuItem={menuItem}/>
            </div>
        </div>
    )
}

export default Courses