import React from "react";

async function getCalendarData(year) {
  const res = await fetch(`http://127.0.0.1:8000/api/calender/${year}`);
  if (!res.ok) {
    throw new Error("Failed to fetch calendar data");
  }
  return res.json();
}

export default async function CalendarPage({ params }) {
  const { year } = await params;

  try {
    const calendarData = await getCalendarData(year);

    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Calendar for {calendarData.year}</h1>
        {calendarData.months.map((month) => (
          <div key={month.month} className="mb-6">
            <h2 className="text-2xl font-semibold">{month.name}</h2>
            <ul className="grid grid-cols-7 gap-2 mt-2">
              {month.days.map((day) => (
                <li key={day.day} className="border p-2 text-center">
                  {day.day} - {day.weekday_name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  } catch (_) {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <p className="text-3xl font-bold">Page Under Construction</p>;
        </div>
      </>
    );
  }
}
