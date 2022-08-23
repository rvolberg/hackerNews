import React, { useState } from "react";
import Card from "./Card";
import CardFull from "./CardFull";
import { unixTimeConverter, findHexaCode } from "./utils";

const CardContainer = ({ item }) => {
  const [onclick, setOnClick] = useState(false);
  const setTrue = () => {
    setOnClick(true);
  };
  const setFalse = () => {
    setOnClick(false);
  };
  return (
    <div
      onClick={() => {
        onclick === true ? setFalse() : setTrue();
      }}
    >
      {onclick === false && (
        <Card
          title={item.title}
          author={item.by}
          date={unixTimeConverter(item.time)}
          score={item.score}
          type={item.type}
        />
      )}
      {onclick === true && (
        <CardFull
          title={item.title}
          author={item.by}
          date={unixTimeConverter(item.time)}
          score={item.score}
          url={item.url}
          type={item.type}
          text={findHexaCode(item.text)}
        />
      )}
    </div>
  );
};

export default CardContainer;
