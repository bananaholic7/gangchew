import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputDate =({name ,handleInputChange}) => {
    const [startDate, setStartDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState('');


    const handleChange =(date)=> {
      const key = name;
      setSelectedDate(date)
      setStartDate(date)
      const newValue = selectedDate;

      handleInputChange(key,newValue);
      // console.log(selectedDate);
    }

    return (
      <DatePicker
        showIcon
        selected={startDate}
        onChange={(date) => handleChange(date)}
      />
    );
  };
  export default InputDate;