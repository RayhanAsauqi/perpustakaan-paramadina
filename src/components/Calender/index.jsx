import { useState } from "react";
import DatePicker from "react-datepicker";
import "./calender.css";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-[#006DB3] shadow-lg rounded-lg p-4">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          inline
          renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
            <div className="flex justify-between items-center mb-2 bg-transparent">
              <span className="text-lg font-medium text-white">
                {monthDate.toLocaleString("default", { month: "long" })}{" "}
                {monthDate.getFullYear()}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={decreaseMonth}
                  className="text-gray-600 hover:text-gray-800 text-2xl"
                >
                  {"<"}
                </button>
                <button
                  onClick={increaseMonth}
                  className="text-gray-600 hover:text-gray-800"
                >
                  {">"}
                </button>
              </div>
            </div>
          )}
          calendarClassName="bg-[#006DB3] border-none  p-4"
          dayClassName={(date) => {
            const currentDate = new Date();
            const currentMonth = currentDate.getMonth();
            const isCurrentMonth = date.getMonth() === currentMonth;
            const isSelected =
              selectedDate && date.getTime() === selectedDate.getTime();
            const isDifferentMonth =
              date.getMonth() !==
              new Date(date.getFullYear(), currentMonth, 1).getMonth();

            return (
              (isSelected ? "bg-blue-600 text-white rounded-full" : "") +
              " " +
              (isCurrentMonth ? "text-gray-900" : "text-gray-400") +
              " " +
              (isDifferentMonth ? "text-gray-400" : "text-gray-900")
            );
          }}
          dayStyle={() => ({
            color: "white", // Menyesuaikan warna teks hari menjadi putih
          })}
          className="custom-datepicker"
        />
        <div className="mt-4">
          <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700">
            Add event
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
