import React from "react";
import { Button } from "react-bootstrap";

function Choices({Buttons, filter}){
    return(<div>
        {
            Buttons.map((cat, i)=>{
                return(<Button className="Choices" onClick={() => filter(cat)} variant="out-line danger">{cat}</Button>)
            })
        }
        
        </div>)
}

export default Choices