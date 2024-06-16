import { TextField } from '@mui/material';
import { useSize } from 'ahooks';
import { useRef } from 'react';

export default function MuiTextareaMinRows() {
    const ref = useRef(null);
    const size = useSize(ref);

    console.log(size);

    return (
        <TextField
            ref={ref}
            multiline
            minRows={4}
            placeholder="e.g. A cat is sitting on a table"
            fullWidth
            sx={{
                '& .MuiInputBase-input': {
                    pb: 3,
                },
            }}
        />
    );
}
