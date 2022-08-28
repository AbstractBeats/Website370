import React from "react";
import { Button } from "react-bootstrap";
import elon from "../images/elon.jpeg"

function Profile(){
    return(
        <div className="profile">
            <img className="profileimg" src={elon}></img>
            <h2>Welcome Back!</h2>
            <h3>Elon Musk</h3>
            <ul>
                <li>My Courses</li>
                <li>Report Card</li>
                <li>Activity</li>
            </ul>
            <Button variant="outline-danger" size="lg">Log Out</Button>
        </div>
    )
}

export default Profile