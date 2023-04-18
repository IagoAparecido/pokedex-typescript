import React from "react";
import "./style.css";

function Card(props: any) {
  return (
    <div className="poke_card">
      <div className="poke_img">
        <img src={props.img} alt="" />
      </div>
      <div className="poke_info">
        <p>{props.type}</p>
        <h1>{props.name}</h1>
      </div>
    </div>
  );
}

export default Card;
