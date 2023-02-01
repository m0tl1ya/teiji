"use client";
import * as React from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useClockStore } from '@/lib/store';

const BreakTimePicker: React.FC = () =>  {
    const { breakTime, setBreakTime } = useClockStore();

    return (
        <TextField
            id="standard-basic"
            value={breakTime}
            onChange={(newValue) => {
                setBreakTime(newValue);
            }}
            variant="standard" type={"time"} />
    );
}

export default BreakTimePicker;
