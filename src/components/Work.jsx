import React from "react";
import Allset from "../assets/Allset_preview.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">{`// Check out some of my recent work`}</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${Allset})` }}
            className="shadow-lg shadow-pink-600 group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-center text-2xl font-bold text-white tracking-wider">
                Allset
              </span>
              <div className="pt-8 text-center">
                <a href="https://allsetweb.itsumar.com" target="_blank" rel="noreferrer">
                  <button className="text-white group border-2 px-6 py-3 my-2 hover:bg-pink-600 hover:border-pink-600 text-center">
                    View Project
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
