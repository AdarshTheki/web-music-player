import { NavLink, useLocation } from "react-router-dom";
import { useDataLayerValue } from "../../Context/DataLayer";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [{ playLists, collection, artistsList }] = useDataLayerValue();

  return (
    <div className="sidebar__container">
      {/* Like Collection */}
      <NavLink
        to="/collection/track"
        className={`sidebar__item ${pathname === "/collection/track" ? "active" : ""}`}>
        <div className="sidebar__img">
          <img
            src="https://misc.scdn.co/liked-songs/liked-songs-640.png"
            alt="like"
            width={50}
          />
        </div>
        <div className="sidebar__detail">
          <strong className="line-clamp">Liked Songs</strong>
          <p className="line-clamp">playlist ● {collection?.total} songs</p>
        </div>
      </NavLink>
      {/* PlayLists Lists  */}
      {playLists?.length &&
        playLists?.map((playlist) => (
          <NavLink
            to={`/playlist/${playlist?.id}`}
            key={playlist?.id}
            className={`sidebar__item ${
              pathname === `/playlist/${playlist?.id}` ? "active" : ""
            }`}>
            <div className="sidebar__img">
              <img
                src={playlist?.images[0]?.url}
                alt={playlist?.id}
                width={50}
              />
            </div>
            <div className="sidebar__detail">
              <strong className="line-clamp">{playlist?.name}</strong>
              <p className="line-clamp">
                {playlist?.type} ● {playlist?.owner?.display_name}
              </p>
            </div>
          </NavLink>
        ))}
      {/* Artists Lists */}
      {artistsList?.length &&
        artistsList?.map((item) => (
          <NavLink
            to={`/artists/${item?.id}`}
            key={item?.name}
            className={`sidebar__item ${
              pathname === `/artists/${item?.id}` ? "active" : ""
            }`}>
            <div className="sidebar__img">
              <img src={item?.images[2]?.url} alt={item?.name} width={50} />
            </div>
            <div className="sidebar__detail">
              <p className="line-clamp">Artist</p>
              <strong className="line-clamp">{item?.name}</strong>
            </div>
          </NavLink>
        ))}
    </div>
  );
};
export default Sidebar;
