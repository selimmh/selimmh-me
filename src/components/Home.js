import React, { useEffect, useRef } from "react";
import Shape from "../3d/shape";

import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineFilePdf } from "react-icons/ai";

import { TweenMax, Power3 } from "gsap";

function Home() {
  let scene,
    title,
    description,
    buttons,
    shape = useRef(null);

  useEffect(() => {
    TweenMax.to(scene, 0, { css: { visibility: "visible" }, delay: 1 });
    TweenMax.staggerFrom(
      [title, description, buttons, shape],
      0.8,
      { opacity: 0, x: 30, ease: Power3.easeOut },
      0.3
    );
  });

  return (
    <div
      className="w-auto h-screen flex items-center relative"
      ref={(el) => (scene = el)}
    >
      <div className="flex flex-col w-full md:w-1/2 z-10 space-y-10">
        <div
          className="text-3xl md:text-5xl tracking-wide"
          ref={(el) => (title = el)}
        >
          Hi, I am Selim. <br />
          Nice to meet you
        </div>
        <div
          className="text-md md:text-xl font-light tracking-wider"
          ref={(el) => (description = el)}
        >
          I like to develop cool stuff
          <br />
          using React <br />
        </div>

        <div className="flex space-x-5" ref={(el) => (buttons = el)}>
          <a href="https://github.com/selimmh" target="blank">
            <AiFillGithub className="text-3xl hover:scale-110 cursor-pointer transition-all duration-300 ease-out"></AiFillGithub>
          </a>
          <a href="https://twitter.com/selimmh0" target="blank">
            <AiFillTwitterCircle className="text-3xl hover:scale-110 cursor-pointer transition-all duration-300 ease-out"></AiFillTwitterCircle>
          </a>
          <a href="https://www.linkedin.com/in/selimmh/" target="blank">
            <AiFillLinkedin className="text-3xl hover:scale-110 cursor-pointer transition-all duration-300 ease-out"></AiFillLinkedin>
          </a>
          <AiOutlineFilePdf className="text-3xl hover:scale-110 cursor-pointer transition-all duration-300 ease-out"></AiOutlineFilePdf>
        </div>
      </div>

      <div className="w-full h-full absolute" ref={(el) => (shape = el)}>
        <Shape />
      </div>
    </div>
  );
}

export default Home;
