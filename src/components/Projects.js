import React, { useRef, useEffect } from "react";
import Table from "./Tables/Table";
import LoadingTable from "./Tables/LoadingTable";

import { coviddata, portfolio, tictactoe } from "../preview";

import { TweenMax, Power3 } from "gsap";

function Projects() {
  let scene = useRef(null);
  let table = useRef(null);

  useEffect(() => {
    TweenMax.to(scene, 0, { css: { visibility: "visible" }, delay: 5 });
    TweenMax.from(table, 0.8, { opacity: 0, ease: Power3.easeOut, delay: 0.5 });
  }, []);

  return (
    <div
      ref={(el) => (scene = el)}
      className="w-full h-auto flex flex-col items-center justify-center space-y-10 py-24"
    >
      {/* Table Container */}
      <div
        ref={(el) => (table = el)}
        className="flex flex-col w-full items-center space-y-16"
      >
        <Table
          title="COVIDDATA.RO"
          description="Website for Romania's daily Covid status."
          linkLive="https://selimmh.github.io/coviddata-ro/"
          linkSource="https://github.com/selimmh/coviddata-ro"
          previewImage={coviddata}
        />
        <Table
          title="PERSONAL WEBSITE"
          description="Personal Website to showcase my work"
          linkLive="#"
          linkSource="#"
          previewImage={portfolio}
        />
        <Table
          title="TIC TAC TOE"
          description="Mini Tic Tac Toe game using web tools."
          linkLive="https://selimmh.github.io/tic-tac-toe/"
          linkSource="https://github.com/selimmh/tic-tac-toe/"
          previewImage={tictactoe}
        />
        <LoadingTable />
        <LoadingTable />
      </div>
    </div>
  );
}

export default Projects;
