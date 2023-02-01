"use client";
import * as React from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import { useClockStore } from '@/lib/store';

export default function StartTimePicker() {
  const { startTime, setTime } = useClockStore();
  
  return (
    <TextField
      id="standard-basic"
      value={startTime}
      onChange={(newValue) => {
        setTime(newValue);
      }}
      variant="standard" type={"time"} />
  );

}