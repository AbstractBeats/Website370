import React from "react";
import { Button } from "react-bootstrap";
import elon from '../images/elon.jpeg'

//Contains Cards not the entire page

function Course({menuItem}){
    return(<div className="item">
        {menuItem.map((Item) =>{
            return(<div className="item-con" key={Item.id}>
        <div className="item-container">
            <img src={Item.images} width={75} height={75}></img>
            <p className="a1">{Item.title}</p>
            <p>{Item.description}</p>
            <Button variant="outline-danger" size="lg">Enroll Now!</Button>
        </div>
      </div>)
        })}
    </div>)
}

export default Course