/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";
import picture from "../../assets/songs.png";
import { format } from "date-fns";

export default function BodyHeader({
  album,
  artists,
  duration_ms = 221700,
  popularity = 45,
  name = "Liked Songs",
  description,
  length,
  owner,
  type,
  images,
  followers,
}) {
  const preview_url = images?.length ? images[0]?.url : album?.images[0]?.url;

  return (
    <div style={{ position: "relative" }}>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <img
          src={preview_url || picture}
          alt="bgImage"
          className="bodyHeaderImage"
        />
      </div>

      <div className="bodyHeader">
        <div>
          <img src={preview_url || picture} alt="body info picture" />
        </div>
        <div className="bodyHeader__detail">
          <p>{type || "Playlists"}</p>
          <h2>{name?.substring(0, 20)}</h2>
          {description && <p>{description}</p>}
          <div className="bodyHeader__other">
            {artists &&
              artists?.map((item) => (
                <NavLink
                  key={item?.id}
                  to={`/artists/${item?.id}`}
                  title={item?.type}>
                  {item?.name}
                </NavLink>
              ))}
            {album && (
              <NavLink to={`/album/${album?.id}`} title={album?.type}>
                {album?.name}
              </NavLink>
            )}
            {album?.album_release_date && (
              <span>
                {format(new Date(album?.album_release_date), "MMM dd, yyyy")}
              </span>
            )}
            {owner && (
              <NavLink to={owner.external_urls.spotify} target="__blank">
                {owner?.display_name}
              </NavLink>
            )}
            {followers && (
              <p>
                {followers?.total?.toLocaleString("en-us", Number) + " likes"}
              </p>
            )}
            {popularity && <p>{popularity} K</p>}
            {duration_ms && (
              <p>{format(new Date(duration_ms), "HH:mm")} Hours</p>
            )}
            {length && <p>{length} Songs</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
