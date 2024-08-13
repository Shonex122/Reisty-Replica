import React from "react";
import "./Item.css";
import StarIcon from "@mui/icons-material/Star";

function Item(props) {
  return (
    <div className="item">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="price-icon">
        <div className="icons">
          <StarIcon className="con" />
          <StarIcon className="con" />
          <StarIcon className="con" />
          <StarIcon className="con" />
          <StarIcon className="con" />
        </div>
        <div className="rating">{props.rating}</div>
      </div>
    </div>
  );
}

export default Item;
