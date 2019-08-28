import React, { useState, useEffect } from "react";
import { Walter, Text, Container, SubText, Bear } from "./styles";
import verano from "./verano.jpeg";
import ParabensSound from "./music.mp3";
import Sound from "react-sound";
import bear from "./bear.jpg";

export default function Main() {
  const [ks, setKs] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setKs(ks => ks + 2);
    }, 1200);
  }, []);

  return (
    <>
      <Container>
        <Walter
          initial={{ rotate: -15 }}
          animate={{ rotate: 15 }}
          transition={{
            yoyo: Infinity,
            duration: 1,
            ease: "easeInOut"
          }}
          src={verano}
        />
        <Bear
          animate={{ y: 200 }}
          transition={{
            yoyo: Infinity,
            duration: 2,
            ease: "easeInOut"
          }}
          src={bear}
        />
        <Text
          animate={{ scale: 0.5, opacity: 0.5 }}
          transition={{
            yoyo: Infinity,
            duration: 0.5,
            ease: "easeInOut"
          }}
        >
          FELIZ ANIVERSÁRIO VERANO (LIGUE O SOM)!!!
        </Text>
        <SubText>Enquanto você Lia isso o verano deu {ks} ks</SubText>
      </Container>
      <Sound url={ParabensSound} playStatus={Sound.status.PLAYING} />
    </>
  );
}
