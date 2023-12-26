import React from "react";
import { NavLink } from "react-router-dom";
// import web from "./img/phone_laptop.jpeg";

function Card(props) {
  return (
    <>
        <div className="col-md-4 col-10 mx-auto">
            <div className="card">
                <img src={props.imgsrc} alt="img" className="card-img-top img" />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{props.title}</h5>
                    <p className="card-text">
                        Some quick example text to bild on the card title and 
                        bulk of the card's content.
                    </p>
                    <NavLink to='' className='btn btn-primary'>View</NavLink>
                </div>
            </div>
        </div>
    </>
  );
}

export default Card;