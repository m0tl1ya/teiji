"use client";
import * as React from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import { create } from 'zustand'

interface ClockState {
  time: Dayjs | null
  setTime: (value: Dayjs | null) => void
}

const useClockStore = create<ClockState>()((set) => ({
  time: null,
  setTime: (value) => set((state) => ({ time: value })),
}))

export default function StartTimePicker() {
  const { time, setTime} = useClockStore();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'ru'}>
      <TimePicker
        label="Basic example"
        value={time}
        onChange={(newValue) => {
          setTime(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}