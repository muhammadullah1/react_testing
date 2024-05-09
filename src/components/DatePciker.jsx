import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import MaskedInput from 'react-text-mask'

function DatePciker() {
  const [startDate, setStartDate] = useState(new Date())

  const handleDateChange = (date) => {
    setStartDate(date);
};

const handlePaste = (e) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text/plain');
    formatInputDate(pastedText);
};

const formatInputDate = (input) => {
    if (/^\d{8}$/.test(input)) {
        const day = input.slice(0, 2);
        const month = input.slice(2, 4);
        const year = input.slice(4);

        const formattedDate = new Date(`${year}-${month}-${day}`);
        setStartDate(formattedDate);
    }
};

  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        dateFormat='dd/MM/yyyy'
        customInput={
            <input
                type="text"
                onPaste={handlePaste}
            />
        }
      />
    </div>
  )
}

export default DatePciker
