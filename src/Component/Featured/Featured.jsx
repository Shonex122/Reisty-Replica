import React from "react";
import "./Featured.css";
import data_featured from "../../assets/all_featured";
import Item from "../Item/Item";

function Featured() {
  return (
    <div className="featured">
      <h5>Featured Restaurants</h5>
      <p>Discover the best restaurants in your local area</p>

      <div className="featured-item">
        {data_featured.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              starIcon={item.StarIcon}
              rating={item.rating}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Featured;
