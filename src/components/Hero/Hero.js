import Image from "next/image";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

function scrollOpacity() {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrolled = winScroll / height;
  const newOpacity = 1 + scrolled * 2;
  return newOpacity;
}

function scrollFilter() {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;

  const newFilter = 0 + winScroll / 100;
  return "blur(" + newFilter + "px) brightness(0.7)";
}

export default function Hero(props) {
  const [opacity, setOpacity] = useState(1);
  const [filter, setFilter] = useState("blur(0px) brightness(0.7)");

  useEffect(() => {
    const onScroll = () => {
      setOpacity(scrollOpacity());
      setFilter(scrollFilter());
    };

    window.addEventListener("scroll", onScroll);

    return function cleanup() {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <>
      <ImgSrc
        style={{
          position: "fixed",
          zIndex: "-10",
          background: `url("/images/backgroundImage.jpg")`,
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
        }}
        opacity={opacity}
        filter={filter}
      />
      <Parallax scale={["2", "0"]}>
        <div className="hero-container">
          <h2>Hey, I&apos;m Frank 👋</h2>

          <div className="hero-text">
            <p>I&apos;m a software developer based in Hamburg.</p>
          </div>
        </div>
      </Parallax>
    </>
  );
}

const ImgSrc = styled.div.attrs((props) => ({
  style: {
    opacity: `${props.opacity}`,
    filter: `${props.filter}`,
  },
}))``;
