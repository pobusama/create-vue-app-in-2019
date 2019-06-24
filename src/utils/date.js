import format from "date-fns/format";
import startOfDay from "date-fns/start_of_day";
import endOfDay from "date-fns/end_of_day";

function dateFilter(date, pattern = "YYYY-MM-DD HH:mm:ss", placeholder = "") {
  return date ? format(+date, pattern) : placeholder;
}
function getStartOfDay(date = new Date()) {
  return startOfDay(date);
}
function getEndOfDay(date = new Date()) {
  return endOfDay(date);
}

export { dateFilter, getStartOfDay, getEndOfDay };
