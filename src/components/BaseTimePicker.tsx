"use client";
import * as React from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useClockStore } from '@/lib/store';

export default function BaseTimePicker() {
    const { breakTime, setBreakTime} = useClockStore();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'ru'}>
      <TimePicker
        label="Basic example"
        value={breakTime}
        onChange={(newValue) => {
            setBreakTime(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />

    </LocalizationProvider>
  );
}