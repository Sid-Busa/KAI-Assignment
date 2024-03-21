import React from "react";
import { CSSTransition } from "react-transition-group";
import { AI_Images } from "./styleOptions";
import ImageContianer from "../../common/ImageContianer";
import { Button } from "@mui/material";
import "./style.scss";

const ImageContainer = ({ aiSelectedImage, viewImage }) => {
  return (
    <div className="ImageContainer">
      {viewImage && (
        <div className="ImageContainer__hightlight-image">
          <img src={aiSelectedImage.image} alt={aiSelectedImage.id} />
          <div className="ImageContainer__hightlight-btns">
            <Button className="ImageContainer__hightlight-edit-btn">
              Edit
            </Button>
            <Button className="ImageContainer__hightlight-download-btn">
              Download
            </Button>
          </div>
        </div>
      )}

      <div className="ImageContainer__header">
        <h3 className="ImageContainer__title"> Explore Artworks </h3>
        <p className="ImageContainer__description">
          Explore AI-generated images in diverse styles, unveiling a captivating
          collecting collection of visuals crafted by AI
        </p>
      </div>
      <div className="ImageContainer__list">
        {AI_Images.map((img) => (
          <ImageContianer {...img} width={"100%"} height={300} />
        ))}
      </div>
    </div>
  );
};

export default ImageContainer;
