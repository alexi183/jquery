import React from "react";
import "./MediaCard.scss";

import { Link } from "react-router-dom";
import Truncate from "react-truncate";

// import img01 from "../../../img/temp-img-01.jpg";

const MediaCard = props => {
  return (
    <div className="media-card__block-sm-grid">
      {/* eslint-disable */}
      <Link
        to={`/media/detail/${props.id}`}
        className="media-card__block-sm"
        // style={{
        //     background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img01})`,
        //     backgroundSize: `cover`
        // }}
      >
        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.image &&
              props.image.thumb})`
          }}
          className="media-card__img-container"
        />
        <div className="media-card__block-sm-aside">
          <i
            className={`media-announce__icon media-announce__icon_${
              props.type === 1 ? "photo" : "video"
            }`}
          >
            &zwnj;
          </i>
        </div>
        <div className="media-card__block-sm-title">
          <div className="media-card__block-sm-title__container">
            <Truncate lines={3}>{props.name}</Truncate>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MediaCard;
