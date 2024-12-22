import * as React from "react";

function SidebarHeader() {
  const [dropdownVisible, setDropdownVisible] = React.useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="flex flex-col px-5 w-full text-gray-900 relative">
      <div className="flex gap-3 items-center self-start text-2xl leading-none">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/79d4891dfdd616dafb2053d14f46382dc859349911973c60dacc81f8db0601e8?placeholderIfAbsent=true&apiKey=44e572f90a34489db004987874bd94e7"
          className="object-contain shrink-0 self-stretch my-auto w-7 aspect-[0.87]"
          alt="CodeAnt AI Logo"
        />
        <div className="self-stretch my-auto">CodeAnt AI</div>
      </div>
      <div className="flex flex-col mt-5 w-full text-base whitespace-nowrap">
        <div className="flex flex-col w-full">
          <div className="flex flex-col w-full min-h-[40px] relative">
            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="text-black bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              type="button"
            >
              UtkarshDhairyaPanwar
              <svg
                className="w-2.5 h-2.5 ms-auto"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {dropdownVisible && (
              <div
                id="dropdown"
                className="z-50 absolute top-full left-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-[#fafafa]"
              >
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Amartya
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Mahith
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Chinmay
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Brian
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarHeader;
