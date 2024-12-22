import * as React from "react";

const footerItems = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca1eb912d9518f614e2ef4913940c1e061bbc77fee780e679211cd27239cffcc?placeholderIfAbsent=true&apiKey=44e572f90a34489db004987874bd94e7",
    label: "Support"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/05d15fa6c7e4746dc967c7fc2cd574c72d48a2b1dcea6fad4d6a22b93e07acf5?placeholderIfAbsent=true&apiKey=44e572f90a34489db004987874bd94e7",
    label: "Logout"
  }
];

function SidebarFooter() {
  return (
    <div className="flex flex-col px-4 pb-6 w-full text-base font-semibold leading-6 text-gray-700 whitespace-nowrap  max-md:mt-10">
      <div className="flex flex-col w-full">
        {footerItems.map((item, index) => (
          <div key={index} className="flex overflow-hidden items-center py-0.5 w-full">
            <button className="flex flex-1 shrink gap-3 items-center self-stretch px-3 py-2 my-auto w-full bg-white rounded-md basis-0" tabIndex="0" role="menuitem">
              <div className="flex flex-1 shrink gap-2 items-center self-stretch my-auto w-full basis-0">
                <img
                  loading="lazy"
                  src={item.icon}
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  alt=""
                />
                <div className="self-stretch my-auto">{item.label}</div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SidebarFooter;