import { format, formatRelative } from "date-fns";
import { fr } from "date-fns/locale";

import { Capitalize } from "../lib/utils";

export default function DateComponent({
  dateString,
  timeString,
  capitalize = false,
}) {
  let fullDate = formatedDateTime(dateString, timeString);
  const dateTime = format(fullDate, "dd-MM-yyyy/HH:mm");
  let shownDate = formatRelative(fullDate, new Date(), {
    locale: fr,
  }).replace(":", "H");

  return (
    <time dateTime={dateTime}>
      {capitalize ? <Capitalize>{shownDate}</Capitalize> : shownDate}
    </time>
  );
}

export function formatedDateTime(dateString, timeString) {
  const time = timeString.toLowerCase().split("h");
  let fullDate = new Date(dateString);
  fullDate.setHours(time[0]);
  fullDate.setMinutes(time[1]);
  return fullDate;
}
