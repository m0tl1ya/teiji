"use client";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useClockStore } from '@/lib/store';

const BreakTimePicker: React.FC = () =>  {
    const { breakTime } = useClockStore();
    const { setBreakTime } = useClockStore((state) => state);

    return (
        <TextField
            id="standard-basic"
            value={breakTime}
            onChange={(newValue) => {
                setBreakTime(newValue.target.value);
            }}
            variant="standard" type={"time"} />
    );
}

export default BreakTimePicker;
