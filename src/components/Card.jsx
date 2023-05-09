import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({
  title = "default title",
  description = "deafult description",
}) {
  return (
    <div className="Card">
      <Link to={title}>
        <h1>{title}</h1>
      </Link>
      <p>{description}</p>
    </div>
  );
}

export default Card;
