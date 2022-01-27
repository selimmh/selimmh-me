import React, { useState, useRef, useEffect } from "react";
import coviddata from "../preview/coviddata.png";
import tictactoe from "../preview/tictactoe.png";
import { ClockLoader } from "react-spinners";
import { TweenMax, Power3 } from "gsap";

function Projects() {
  let [loading, setLoading] = useState(true);
  let scene,
    table1,
    table2,
    table3,
    table4 = useRef(null);

  useEffect(() => {
    // TweenMax.from(scene, 0.8, { opacity: 0, x: 40, ease: Power3.easeOut });
    TweenMax.to(scene, 0, { css: { visibility: "visible" }, delay: 1 });
    TweenMax.staggerFrom(
      [table1, table2, table3, table4],
      0.8,
      { opacity: 0, ease: Power3.easeOut },
      0.3
    );
  });

  return (
    // Page container
    <div
      ref={(el) => (scene = el)}
      className="w-full h-auto flex flex-col items-center justify-center space-y-10 py-24"
    >
      {/* Table Container */}
      <div className="flex flex-col w-full items-center space-y-16">
        {/* Table 1 */}
        <div
          ref={(el) => (table1 = el)}
          className="flex items-center justify-center bg-white w-3/4 h-72 rounded-lg drop-shadow-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
        >
          {/* Item Container */}
          <div className="flex sm:flex-row flex-col items-center justify-center w-4/5 h-4/5">
            {/* Item 1 */}
            <div className="flex flex-col text-gray-800 sm:h-full h-1/2 sm:w-1/2 w-full p-4 justify-center space-y-2 sm:space-y-4">
              {/* Content */}
              <div className="text-md">COVIDDATA.RO</div>
              <div className="text-xs">
                Website for Romania's daily Covid status.
              </div>
              <div className="flex text-xs space-x-4">
                <a
                  href="https://selimmh.github.io/coviddata-ro/"
                  target="blank"
                >
                  <div className="hover:bg-gray-800 hover:text-gray-100 transition-all cursor-pointer border-gray-800 border-2 px-2 py-1 rounded-lg">
                    Live
                  </div>
                </a>
                <a
                  href="https://github.com/selimmh/coviddata-ro"
                  target="blank"
                >
                  <div className="hover:bg-gray-800 hover:text-gray-100 transition-all cursor-pointer border-gray-800 border-2 px-2 py-1 rounded-lg">
                    Source
                  </div>
                </a>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex sm:h-full h-1/2 sm:w-1/2 w-full justify-center">
              {/* Content */}
              <img
                src={coviddata}
                alt="preview"
                className="object-scale-down"
              />
            </div>
          </div>
        </div>

        {/* Table 2 */}
        <div
          ref={(el) => (table2 = el)}
          className="flex items-center justify-center bg-white w-3/4 h-72 rounded-lg drop-shadow-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
        >
          {/* Item Container */}
          <div className="flex sm:flex-row flex-col items-center justify-center w-4/5 h-4/5">
            {/* Item 1 */}
            <div className="flex flex-col text-gray-800 sm:h-full h-1/2 sm:w-1/2 w-full p-4 justify-center space-y-2 sm:space-y-4">
              {/* Content */}
              <div className="text-md">TIC TAC TOE</div>
              <div className="text-xs">
                Mini Tic Tac Toe game using web tools.
              </div>
              <div className="flex text-xs space-x-4">
                <a href="https://selimmh.github.io/tic-tac-toe/" target="blank">
                  <div className="hover:bg-gray-800 hover:text-gray-100 transition-all cursor-pointer border-gray-800 border-2 px-2 py-1 rounded-lg">
                    Live
                  </div>
                </a>
                <a href="https://github.com/selimmh/tic-tac-toe" target="blank">
                  <div className="hover:bg-gray-800 hover:text-gray-100 transition-all cursor-pointer border-gray-800 border-2 px-2 py-1 rounded-lg">
                    Source
                  </div>
                </a>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex sm:h-full h-1/2 sm:w-1/2 w-full justify-center">
              {/* Content */}
              <img
                src={tictactoe}
                alt="preview"
                className="object-scale-down"
              />
            </div>
          </div>
        </div>

        {/* Table 3 */}
        <div
          ref={(el) => (table3 = el)}
          className="flex flex-col bg-white text-gray-800 w-3/4 h-72 rounded-lg drop-shadow-xl hover:scale-105 transition-all duration-300 ease-out cursor-pointer justify-center items-center space-y-4"
        >
          <div>Coming soon</div>
          <ClockLoader size={40} color={"#111827"} loading={loading} />
        </div>

        {/* Table 4 */}
        <div
          ref={(el) => (table4 = el)}
          className="flex flex-col bg-white text-gray-800 w-3/4 h-72 rounded-lg drop-shadow-xl hover:scale-105 transition-all duration-300 ease-out cursor-pointer justify-center items-center space-y-4"
        >
          <div>Coming soon</div>
          <ClockLoader size={40} color={"#111827"} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
