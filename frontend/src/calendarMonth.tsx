import { useEffect, useState } from "react";
import "./styles/calendarMonth.css";

const CalendarMonth: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const [firstDayOfMonth, setFirstDayOfMonth] = useState(0);
  const [daysInMonth, setDaysInMonth] = useState(0);

  useEffect(() => {
    // Get first day of month to figure out where to start calendar
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    setFirstDayOfMonth(firstDay);

    // Check how many days are in a month
    const daysInCurrentMonth = new Date(
      currentYear,
      currentMonth + 1,
      0
    ).getDate();
    setDaysInMonth(daysInCurrentMonth);
  }, [currentMonth, currentYear]);

  const daysArray = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );
  const totalDaysInGrid =
    Math.ceil((daysArray.length + firstDayOfMonth) / 7) * 7;

  return (
    <>
      <div className="calendar-page">
        {" "}
        <div>
          <h2>
            {new Date(currentYear, currentMonth).toLocaleString("default", {
              month: "long",
              year: "numeric",
            })}
          </h2>
        </div>
        <div className="calendar-header">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
            (day, index) => (
              <div key={index} className="calendar-day-head">
                {day}
              </div>
            )
          )}
        </div>
        <div className="calendar-grid">
          {[...Array(firstDayOfMonth)].map((_, index) => (
            <div key={index} className="calendar-day empty"></div>
          ))}

          {daysArray.map((day) => (
            <div key={day} className="calendar-day">
              {day}
            </div>
          ))}

          {[
            ...Array(totalDaysInGrid - (daysArray.length + firstDayOfMonth)),
          ].map((_, index) => (
            <div key={index + daysArray.length} className="calendar-day empty">
              {" "}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default CalendarMonth;
