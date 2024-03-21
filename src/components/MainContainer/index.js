import React, { useState } from "react";
import ImageConfig from "./ImageConfig";
import ImageContainer from "./ImageContainer";
import "./style.scss";
import { AI_Images } from "./styleOptions";

const MainContainer = () => {
  const [aiGenerateText, setAiGenerateText] = useState();
  const [aiSelectedImage, setAISelectedImage] = useState(null);
  const [viewImage, setViewImage] = useState(false);

  const handleGenerateText = () => {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    const filterImage = AI_Images.find(({ id }) => id === randomNumber);
    setAISelectedImage(filterImage);
    setAiGenerateText(filterImage.description);
  };

  const handleToDisplay = () => {
    if (aiSelectedImage) {
      setViewImage(true);
    }
  };

  return (
    <div className="main-container">
      <ImageConfig
        aiGenerateText={aiGenerateText}
        handleGenerateText={handleGenerateText}
        handleToDisplay={handleToDisplay}
      />
      <ImageContainer aiSelectedImage={aiSelectedImage} viewImage={viewImage} />
    </div>
  );
};

export default MainContainer;
