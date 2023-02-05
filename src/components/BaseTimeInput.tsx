"use client";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useClockStore } from '@/lib/store';

const BaseTimeInput: React.FC = () => {
    const { baseTime } = useClockStore();
    const { setBaseTime } = useClockStore((state) => state);

    return (
        <TextField
            id="standard-basic"
            value={baseTime}
            onChange={(newValue) => {
                setBaseTime(newValue.target.value);
            }}
            variant="standard" type={"time"} />
    );
}

export default BaseTimeInput;
