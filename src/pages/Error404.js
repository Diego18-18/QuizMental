import React from "react";
import EmojiSad from "../images/emoji-frown-fill.svg";
import "./Error404.css";

const Error404 = () => {
  return (
    <>
      <img src={EmojiSad} className="emoji-error" alt="Error 404" />
      <h2>Error 404: Ocurrió un error.</h2>
    </>
  );
};

export default Error404;
