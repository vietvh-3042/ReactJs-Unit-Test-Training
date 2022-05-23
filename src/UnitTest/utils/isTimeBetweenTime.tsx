import moment from "../constants/moment";

export const isTimeBetweenTime = function (startTime: string, endTime: string, serverTime: string) {
  let start = moment(startTime, "H:mm");
  let end = moment(endTime, "H:mm");
  let server = moment(serverTime, "H:mm");
  // if (end < start) {
  //   return (
  //     (server >= start && server <= moment("23:59:59", "h:mm:ss")) ||
  //     (server >= moment("0:00:00", "h:mm:ss") && server < end)
  //   );
  // }
  return server >= start && server < end;
};
