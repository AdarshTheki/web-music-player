import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./RowItems.css";

export default function RowItems({
  external_urls,
  followers = { total: 9526 },
  genres = [],
  href,
  id,
  images = [],
  name,
  popularity,
  type,
  description,
}) {
  return (
    <NavLink to={`/${type}/${id}`} className="rowItems">
      <div className="rowItems__img">
        <img src={images[0]?.url} alt={name} height={140} />
        <p>{followers.total.toLocaleString("en-us", Number)}</p>
        <FaPlayCircle />
      </div>
      <div className="rowItems__detail">
        <p>{name?.substring(0, 20)}</p>
        <span>
          {genres.length
            ? genres?.map((i) => i).join(", ")
            : ["hindi", "english", "pop", "bollywood", "desi", "mix"]
                .map((i) => i)
                .join(", ")}
        </span>
      </div>
    </NavLink>
  );
}
