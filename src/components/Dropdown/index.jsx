import { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className={`text-black border font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ${
            isOpen ? "border-[#006DB3]" : "border-[#333333]"
          }`}
        type="button"
      >
        All History
        <svg
          className="w-2.5 h-2.5 ms-3"
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

      {/* Dropdown menu */}
      <div
        id="dropdown"
        className={`z-10 ${
          isOpen ? "block" : "hidden"
        } absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 `}
        style={{ top: "100%", left: 0 }}
      >
        <ul
          className="py-2 text-sm text-black "
          aria-labelledby="dropdownDefaultButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 border mx-[7px] rounded-[30px] bg-[#EAEEFF] font-sans text-[10px] font-semibold"
            >
              Week
            </a>
          </li>
          <li className="py-[15.28px]">
            <a
              href="#"
              className="block px-4 py-2 mx-[7px] rounded-[30px] bg-[#EAEEFF] font-sans text-[10px] font-semibold"
            >
              Moonth
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 mx-[7px] rounded-[30px] bg-[#EAEEFF] font-sans text-[10px] font-semibold"
            >
              Year
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
