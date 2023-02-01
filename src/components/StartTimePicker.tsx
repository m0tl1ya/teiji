"use client";
import * as React from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import { useClockStore } from '@/lib/store';

const StartTimePicker: React.FC = () => {
  const { startTime } = useClockStore();
  const { setTime } = useClockStore((state) => state);

  return (
    <TextField
      id="standard-basic"
      value={startTime}
      onChange={(newValue) => {
        setTime(newValue.target.value);
      }}
      variant="standard"
      type={"time"} />
  );
}

export default StartTimePicker;
