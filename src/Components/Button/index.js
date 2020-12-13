import React, { useContext } from "react";
import { Image } from "react-native";
import { Button } from "./styles";

import PlusImage from "../../assets/img/plus.png";
import { Context } from "../../Context";

export default function ButtomDownload() {
  const context = useContext(Context);

  if (context.videos.length <= 0) {
    return (
      <Button
        style={{
          borderColor: "#f00",
        }}
      >
        <Image source={PlusImage} />
      </Button>
    );
  } else {
    return (
      <Button>
        <Image source={PlusImage} />
      </Button>
    );
  }
}
