/*
Author: chankruze (chankruze@geekofia.in)
Created: Wed Oct 14 2020 22:19:33 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePickerComp() {
  const [selectedDate, setSelectedDate] = React.useState(null);

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      dateFormat="dd/MM/yyyy"
      minDate={new Date()}
      filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
      isClearable="true"
      showYearDropdown
      scrollableMonthYearDropdown
    />
  );
}

export default DatePickerComp;
