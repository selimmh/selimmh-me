import React from "react";

function Table(props) {
  return (
    //   Table
    <div className="flex items-center justify-center bg-white w-3/4 h-72 rounded-lg drop-shadow-xl hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
      {/* Item Container */}
      <div className="flex sm:flex-row flex-col items-center justify-center w-4/5 h-4/5">
        {/* Item 1 */}
        <div className="flex flex-col text-gray-800 sm:h-full h-1/2 sm:w-1/2 w-full p-4 justify-center space-y-2 sm:space-y-4">
          {/* Content */}
          <div className="text-md">{props.title}</div>
          <div className="text-xs">{props.description}</div>
          <div className="flex text-xs space-x-4">
            <a href={props.linkLive} target="blank">
              <div className="hover:bg-gray-800 hover:text-gray-100 transition-all cursor-pointer border-gray-800 border-2 px-2 py-1 rounded-lg">
                Live
              </div>
            </a>
            <a href={props.linkSource} target="blank">
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
            src={props.previewImage}
            alt="preview"
            className="object-scale-down"
          />
        </div>
      </div>
    </div>
  );
}

export default Table;
