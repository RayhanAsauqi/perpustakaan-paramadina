import { useEffect, useRef } from "react";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.css";

const FormPeminjaman = () => {
  const borrowDateRef = useRef(null);
  const returnDateRef = useRef(null);

  useEffect(() => {
    const calendarPosition = (selectedDates, dateStr, instance) => {
      const calendar = instance.calendarContainer;
      calendar.style.position = "absolute";
      calendar.style.top = `${instance.input.offsetTop + 40}px`;
      calendar.style.left = `${
        instance.input.offsetLeft + instance.input.offsetWidth + 10
      }px`;
    };

    if (borrowDateRef.current) {
      flatpickr(borrowDateRef.current, {
        dateFormat: "d/m/Y",
        onOpen: calendarPosition,
      });
    }
    if (returnDateRef.current) {
      flatpickr(returnDateRef.current, {
        dateFormat: "d/m/Y",
        onOpen: calendarPosition,
      });
    }
  }, []);

  return (
    <div className="relative flex items-center  gap-[76px] justify-center p-10">
      <img
        src="../../../public/assets/svg/discover/sejarah-dunia.svg"
        alt="book"
        width={386}
        height={594}
      />

      <div className="relative">
        <div
          className="absolute bg-[#006DB3] rounded-l-3xl ml-28"
          style={{
            width: "509.91px",
            height: "500px",
            top: "0px",
            left: "0px",
            zIndex: 1,
          }}
        ></div>
        <div
          className="absolute bg-[#2797DF] rounded-lg ml-20 mt-20 "
          style={{
            width: "518.49px",
            height: "300px",
            top: "10px",
            left: "10px",
            zIndex: 2,
          }}
        ></div>
        <div
          className="absolute bg-[#6DC6FF] rounded-lg mt-[20px] "
          style={{
            width: "569.17px",
            height: "397px",
            top: "20px",
            left: "20px",
            zIndex: 3,
          }}
        ></div>
        <div className="relative bg-white py-12 px-6 rounded-lg shadow-lg w-[569.17px] z-10 mt-10">
          <form className="space-y-6 ">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="@students.paramadina.ac.id"
              />
            </div>
            <div>
              <label
                htmlFor="borrowDate"
                className="block text-sm font-medium text-gray-700"
              >
                Pick Borrow Date
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  ref={borrowDateRef}
                  type="text"
                  id="borrowDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5"
                  placeholder="dd/mm/yyyy"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="returnDate"
                className="block text-sm font-medium text-gray-700"
              >
                Pick Return Date
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <input
                  ref={returnDateRef}
                  type="text"
                  id="returnDate"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pr-10 p-2.5"
                  placeholder="dd/mm/yyyy"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPeminjaman;
