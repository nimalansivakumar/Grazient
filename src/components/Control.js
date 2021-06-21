import React from "react";
import styles from "./Control.module.css";

function Control(props) {
  const { color1, color2, degree, position } = props.state;
  const handleStateChange = props.handler;

  const presetColors = [
    {
      backgroundColor1: "#4158D0",
      backgroundColor2: "#FFCC70",
      degree: "43",
      backgroundImage:
        "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
    },
    {
      backgroundColor1: "#00DBDE",
      backgroundColor2: "#FC00FF",
      degree: "90",
      backgroundImage: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
    },
    {
      backgroundColor1: "#FBAB7E",
      backgroundColor2: "#F7CE68",
      degree: "62",
      backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
    },
    {
      backgroundColor1: "#FA8BFF",
      backgroundColor2: "#2BFF88",
      degree: "45",
      backgroundImage: "linear-gradient(45deg, #FA8BFF 0%, #2BFF88 90%)",
    },
    {
      backgroundColor1: "#FFE53B",
      backgroundColor2: "#FF2525",
      degree: "147",
      backgroundImage: "linear-gradient(147deg, #FFE53B 0%, #FF2525 74%)",
    },
    {
      backgroundColor1: "#74EBD5",
      backgroundColor2: "#9FACE6",
      degree: "90",
      backgroundImage: "linear-gradient(90deg, #74EBD5 0%, #9FACE6 100%)",
    },
    {
      backgroundColor1: "#F4D03F",
      backgroundColor2: "#16A085",
      degree: "132",
      backgroundImage: "linear-gradient(132deg, #F4D03F 0%, #16A085 100%)",
    },
    {
      backgroundColor1: "#52ACFF",
      backgroundColor2: "#FFE32C",
      degree: "180",
      backgroundImage: "linear-gradient(180deg, #52ACFF 25%, #FFE32C 100%)",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.control}>
        <div className={styles.color_container}>
          <div className={styles.heading}>
            <h3>
              <label>Popular Gradients</label>
            </h3>
          </div>
          <div className={styles.presets}>
            {presetColors.map((preset, key) => {
              return (
                <div
                  key={key}
                  className={styles.presetColors}
                  style={{ backgroundImage: preset.backgroundImage }}
                  onClick={() => {
                    handleStateChange(
                      "color1",
                      presetColors[key].backgroundColor1
                    );
                    handleStateChange(
                      "color2",
                      presetColors[key].backgroundColor2
                    );
                    handleStateChange("degree", presetColors[key].degree);
                    handleStateChange("position", 0);
                  }}
                ></div>
              );
            })}
          </div>
          <div className={styles.colors}></div>
        </div>

        <div className={styles.inputs} id="inputs">
          <h3>
            <label>Change Gradient</label>
          </h3>
          <div>
            <div className={styles.current_color}>
              <input
                value={color1}
                type="color"
                id="colorinput"
                className={styles.colorinput}
                onChange={(e) => handleStateChange("color1", e.target.value)}
              ></input>
              <input
                type="text"
                id="hexinput1"
                className={styles.hexinput}
                value={color1}
              ></input>
            </div>
            <div className={styles.current_color}>
              <input
                value={color2}
                type="color"
                id="colorinput"
                className={styles.colorinput}
                onChange={(e) => handleStateChange("color2", e.target.value)}
              ></input>
              <input
                type="text"
                id="hexinput2"
                className={styles.hexinput}
                value={color2}
                placeholder={color2}
              ></input>
            </div>
            <button
              className={styles.resetButton}
              id="resetBtn"
              onClick={() => {
                window.location.reload();
              }}
            >
              Reset
            </button>
          </div>
        </div>

        <div className={styles.additionalInputs}>
          <div>
            <h3>
              <label htmlFor="degrees">Degrees</label>
            </h3>
            <h2 id="currentDegree">{degree}°</h2>
            <input
              className={styles.degreeSlider}
              type="range"
              id="degrees"
              min="0"
              max="360"
              onChange={(e) => {
                handleStateChange("degree", e.target.value);
              }}
              value={degree}
            ></input>

            <h3>
              <label htmlFor="position">Position</label>
            </h3>
            <h2 id="currentPosition">{position}%</h2>
            <input
              className={styles.positionSlider}
              type="range"
              id="position"
              min="0"
              max="100"
              value={position}
              onChange={(e) => {
                handleStateChange("position", e.target.value);
              }}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Control;
