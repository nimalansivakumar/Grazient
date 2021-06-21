import React from "react";
import styles from "./Design.module.css";
import copyImage from "../images/copy.svg";

function Design(props) {
  const { color1, color2, degree, position } = props.state;

  var changableBackground = ` background-color : ${color1};
  background-image: linear-gradient( ${degree}deg ,${color1} ${position}%, ${color2} );`;

  //function to copy CSS for the gradient
  function copyCSS() {
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = changableBackground;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    var message = document.getElementById("copiedMessage");
    message.innerText = "Copied CSS!";
    setTimeout(() => {
      message.innerText = "";
    }, 400);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Grazient</h1>
      <div
        className={styles.design_container}
        style={{
          backgroundColor: ` ${color1}`,
          backgroundImage: `linear-gradient( ${degree}deg ,${color1} ${position}%, ${color2} )`,
        }}
      >
        <div className={styles.image_container}>
          <img src={copyImage} alt="copy" onClick={copyCSS}></img>
        </div>
        <p className={styles.copiedMessage} id="copiedMessage"></p>
      </div>
    </div>
  );
}

export default Design;
