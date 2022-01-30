import React, { useState } from "react";
import { ClockLoader } from "react-spinners";

function LoadingTable() {
  let [loading, setLoading] = useState(true);

  return (
    <div className="flex flex-col bg-white text-gray-800 w-3/4 h-72 rounded-lg drop-shadow-xl hover:scale-105 transition-all duration-300 ease-out cursor-pointer justify-center items-center space-y-4">
      <div>Coming soon</div>
      <ClockLoader size={40} color={"#111827"} loading={loading} />
    </div>
  );
}

export default LoadingTable;
