import * as React from "react";
import SearchBox from "./SearchBox";

export function HeaderSection({ totalRepositories }) {
  return (
   <div>
     <div className="flex flex-col w-full bg-[#FAFAFA] border-b border-[#D5D7DA] max-md:max-w-full">
      <div className="flex flex-col px-6 py-5 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap justify-between items-center w-full max-md:max-w-full">
          <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
            <div className="text-2xl font-semibold leading-none text-gray-900">
              Repositories
            </div>
            <div className="mt-1 text-sm leading-none text-gray-700">
              {totalRepositories} total repositories
            </div>
          </div>
          <div className="flex gap-3 items-center self-stretch my-auto text-sm leading-none min-w-[240px]">
            <button className="flex overflow-hidden gap-1 justify-center items-center self-stretch px-3.5 py-2.5 my-auto text-gray-700 bg-white rounded-lg border border-solid shadow-sm border-zinc-300">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8bcc0d7f220a77bea9c3ed56bfb915ac13e836359b468cdfba6e82902f6b5b9?placeholderIfAbsent=true&apiKey=44e572f90a34489db004987874bd94e7"
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                alt=""
              />
              <span className="self-stretch px-0.5 my-auto">Refresh All</span>
            </button>
            <button className="flex overflow-hidden gap-1 justify-center items-center self-stretch px-3.5 py-2.5 my-auto text-white bg-blue-600 rounded-lg border-2 border-solid shadow-sm border-white border-opacity-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1229585b39434356c145e4a484dbabf3ec334454f8f3f73e8f6539a7d12e903b?placeholderIfAbsent=true&apiKey=44e572f90a34489db004987874bd94e7"
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                alt=""
              />
              <span className="self-stretch px-0.5 my-auto">Add Repository</span>
            </button>
          </div>
        </div>
      </div>
    <SearchBox/>
    </div>
   </div>
  );
}