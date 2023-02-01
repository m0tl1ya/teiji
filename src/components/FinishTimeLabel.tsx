"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useClockStore } from '@/lib/store';

const FinishTimeLabel: React.FC = () => {

    const { finishTime } = useClockStore();
    const { setFinishTime } = useClockStore((state) => state);
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
            <TextField
                id="standard-basic"
                value={finishTime}
                variant="standard"
                type={"time"} />
        </Box>
    );
}


export default FinishTimeLabel;

