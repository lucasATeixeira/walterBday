import React from "react";
import { Walter, Goias, Text } from "./styles";
import WalterImage from "./walter.jpeg";
import GoiasImage from "./goias.png";
import ParabensSound from "./parabens.mp3";
import Sound from "react-sound";

export default function Main() {
  return (
    <>
      <Goias
        src={GoiasImage}
        animate={{ scale: 0.5, rotate: 180, opacity: 0.5 }}
        transition={{
          yoyo: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
      />
      <Walter
        animate={{ scale: 0.8 }}
        transition={{
          yoyo: Infinity,
          duration: 1,
          ease: "easeInOut"
        }}
        src={WalterImage}
      />
      <Text
        animate={{ scale: 0.5, opacity: 0.5 }}
        transition={{
          yoyo: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
      >
        Feliz Aniversário VALTER (LIGUE O SOM)!!!!!
      </Text>
      <Sound url={ParabensSound} playStatus={Sound.status.PLAYING} />
    </>
  );
}
