import * as React from "react";

export function RepositoryCard({ name, visibility, language, size, lastUpdate, isAlternate }) {
  return (
    <div className={`flex flex-col justify-center items-start py-6 w-full border-b border-zinc-300 max-md:max-w-full ${isAlternate ? 'bg-neutral-100' : ''}`}>
      <div className="flex flex-col px-6 max-md:px-5">
        <div className="flex gap-2 justify-center items-center self-start whitespace-nowrap">
          <div className="self-stretch my-auto text-xl font-medium leading-tight text-gray-900">
            {name}
          </div>
          <div className="gap-1 self-stretch py-0.5 pr-2.5 pl-2 my-auto text-sm leading-none text-center text-blue-700 bg-sky-50 rounded-full border border-sky-200 border-solid">
            {visibility}
          </div>
        </div>
        <div className="flex gap-10 items-start mt-3 text-base text-gray-900">
          <div className="flex gap-2 justify-center items-center whitespace-nowrap">
            <div className="self-stretch my-auto">{language}</div>
            <div className="flex shrink-0 self-stretch my-auto w-2 h-2 bg-blue-600 rounded-full" />
          </div>
          <div className="flex gap-2 justify-center items-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/93173ae13f6fd4d3ac7d1c084719020b99ca7ff71b107ad7729045de14858aff?placeholderIfAbsent=true&apiKey=44e572f90a34489db004987874bd94e7"
              className="object-contain shrink-0 self-stretch my-auto aspect-[0.92] w-[11px]"
              alt=""
            />
            <div className="self-stretch my-auto">{size}</div>
          </div>
          <div className="gap-2 self-stretch">Updated {lastUpdate}</div>
        </div>
      </div>
    </div>
  );
}