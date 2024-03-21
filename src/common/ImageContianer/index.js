import React from "react";
import BlockIcon from "@mui/icons-material/Block";
import "./style.scss";

const ImageContianer = ({
  title,
  isNone,
  image,
  isSelected,
  width,
  height,
  description,
}) => {
  return (
    <div className="imageContianer__parent">
      <div
        className={`imageContianer ${isSelected && "imageContianer__selected"}`}
        style={{
          width,
          height,
        }}
      >
        {isNone ? (
          <div className="imageContianer__none">
            <div>
              <BlockIcon />
              <p> {title} </p>
            </div>
          </div>
        ) : (
          <div className="imageContianer__image">
            <img src={image} alt={title} />
            {title && (
              <div className="imageContianer__image__title">
                <p> {title} </p>
              </div>
            )}
          </div>
        )}
      </div>
      {description && (
        <p className="imageContianer__description"> {description} </p>
      )}
    </div>
  );
};

export default ImageContianer;
