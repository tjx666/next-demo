import { Button } from '@mui/material';

export default function HoldingKey() {
    return (
        <Button
            variant="outlined"
            onClick={(e) => {
                console.log(
                    'clicked',
                    e.metaKey ? 'with meta' : '',
                    e.shiftKey ? 'with shift' : '',
                    e.ctrlKey ? 'with ctrl' : '',
                    e.altKey ? 'with alt' : '',
                );
            }}
        >
            click me
        </Button>
    );
}
