import React, { useState } from "react";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import Robot from "../../assets/robot.jpeg";
import ImageContianer from "../../common/ImageContianer";
import SelectInput from "../../common/Form/Select";
import { ImageStlyes, RatioOptions, ResolutionOptions } from "./styleOptions";
import "./style.scss";

const ImageConfig = ({
  aiGenerateText,
  handleGenerateText,
  handleToDisplay,
}) => {
  const [form, setForm] = useState({
    resolution: "4K",
    ratio: "16:9",
  });

  const handleChange = (e) => {
    setForm((preState) => ({
      ...preState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="imageConfig">
      <div className="imageConfig__contianer">
        <div className="imageConfig__image-generator">
          <img
            src={Robot}
            alt="robot"
            className="imageConfig__robot-image"
            width={36}
            height={36}
          />
          <p className="imageConfig__robot-text">
            {aiGenerateText ? (
              <>
                {" "}
                All set! Click the{" "}
                <span className="imageConfig__generate-text">
                  {" "}
                  'Generate'{" "}
                </span>{" "}
                button to <br /> bring your image to life{" "}
              </>
            ) : (
              <>
                {" "}
                Describe the image you want and <br /> i'll generate it for you
              </>
            )}
          </p>
        </div>
        <div className="imageConfig__inputContainer">
          <OutlinedInput
            className="imageConfig__generate-textinput"
            id="outlined-adornment-weight"
            aria-describedby="outlined-weight-helper-text"
            multiline
            rows={5}
            fullWidth
            value={aiGenerateText}
            inputProps={{
              "aria-label": "weight",
            }}
          />
          <p
            className="imageConfig__generate-prompt"
            onClick={handleGenerateText}
          >
            {" "}
            Generate Prompt{" "}
          </p>
        </div>
      </div>
      <div className="imageConfig__style-contianer">
        <p className="imageConfig__style-contianer__title"> Select Style </p>
        <div className="imageConfig__style-contianer__list">
          {ImageStlyes.map((img) => (
            <ImageContianer {...img} width={120} height={120} />
          ))}
        </div>
        <div>
          <SelectInput
            name="resolution"
            label="Resolution"
            value={form.resolution}
            handleChange={handleChange}
            options={ResolutionOptions}
          />
          <SelectInput
            name="ratio"
            label="Ratio"
            value={form.ratio}
            handleChange={handleChange}
            options={RatioOptions}
          />
        </div>
      </div>
      <div className="imageConfig__generate-btn-contianer">
        <Button className="imageConfig__generate-btn" onClick={handleToDisplay}>
          Generate
        </Button>
      </div>
    </div>
  );
};

export default ImageConfig;
