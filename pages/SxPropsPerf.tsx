import type { AddAlarmOutlined } from '@mui/icons-material';
import { List, ListItem, Button, type SxProps } from '@mui/material';
import router from 'next/router';
import React, { Fragment } from 'react';

interface SxPropsPerfProps {
    sx: SxProps;
}

export default function SxPropsPerf({ sx }: SxPropsPerfProps) {
    return (
        <List>
            <ListItem>
                <Button
                    sx={{}}
                    onClick={() => {
                        router.push('/', undefined, { shallow: true });
                    }}
                >
                    push new page
                </Button>
            </ListItem>
        </List>
    );
}
