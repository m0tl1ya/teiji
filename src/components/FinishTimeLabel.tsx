"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useClockStore } from '@/lib/store';
import { Input } from '@mui/material';

export default function FinishTimeLabel() {

    const { finishTime, setFinishTime, setBreakTime } = useClockStore();
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Button
                variant="contained"
                onClick={setFinishTime}
            >
                Click
            </Button>
            <TextField id="standard-basic" variant="standard" type={"time"} />
        </Box>
    );
}