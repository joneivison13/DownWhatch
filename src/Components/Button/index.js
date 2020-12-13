import React, { useContext, useState } from "react";
import { Image } from "react-native";
import { Button } from "./styles";

import PlusImage from "../../assets/img/plus.png";
import { Context } from "../../Context";
import OpenBrowser from "./Components/OpenBrowser";

export default function ButtomDownload() {
  const context = useContext(Context);

  const [mostOptions, setMostOptions] = useState(false);

  if (context.videos.length <= 0) {
    return (
      <>
        {mostOptions && <OpenBrowser />}
        <Button
          style={{
            borderColor: "#f00",
          }}
          onPress={() => setMostOptions(true)}
        >
          <Image source={PlusImage} />
        </Button>
      </>
    );
  }
  return (
    <Button onPress={() => setMostOptions(true)}>
      <Image source={PlusImage} />
    </Button>
  );
}
