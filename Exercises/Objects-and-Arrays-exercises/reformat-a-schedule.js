/*
You're given an array of schedule entries. Each entry includes:

day (string)

startTime (string, e.g. "09:00")

endTime (string, e.g. "10:30")

event (string)

Write a function formatSchedule(entries) that returns an object where each day is a key, and the value is an array of formatted strings like:
*/

const entries = [
  { day: "Monday", startTime: "09:00", endTime: "10:30", event: "Math" },
  { day: "Monday", startTime: "11:00", endTime: "12:00", event: "English" },
  { day: "Tuesday", startTime: "10:00", endTime: "11:30", event: "Science" },
];

function formatSchedule(entries) {
  const schedule = {};

  for (const entry of entries) {
    const day = entry.day;
    if (!schedule[day]) {
      schedule[day] = [];
    }

    const timeFrameEvent = `${entry.startTime} - ${entry.endTime} -> ${entry.event}`;

    schedule[day].push(timeFrameEvent);
  }

  return schedule;
}

console.log(formatSchedule(entries));
