import * as React from "react";

function NavigationItem({ icon, label, isActive }) {
  const baseClasses = "flex overflow-hidden items-center py-0.5 w-full";
  const containerClasses = `flex flex-1 shrink gap-3 items-center self-stretch px-3 py-2 my-auto w-full ${
    isActive ? "bg-blue-600 text-white" : "bg-white"
  } rounded-${isActive ? "lg" : "md"} basis-0 ${
    isActive ? "shadow-[0px_1px_2px_rgba(10,13,18,0.05)]" : ""
  }`;

  return (
    <div className={baseClasses}>
      <button className={containerClasses} tabIndex="0" role="menuitem">
        <div className="flex flex-1 shrink gap-2 items-center self-stretch my-auto w-full basis-0">
          <img
            loading="lazy"
            src={icon}
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            alt=""
          />
          <div className="self-stretch my-auto">{label}</div>
        </div>
      </button>
    </div>
  );
}

export default NavigationItem;