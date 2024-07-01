import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Button, Collapse, Stack } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';

const NativeDiv = () => {
    const [show, setShow] = useState(false);
    const [animateParent] = useAutoAnimate();

    return (
        <div>
            <button
                onClick={() => {
                    setShow(!show);
                }}
            >
                toggle
            </button>
            <ul ref={animateParent}>
                <li>春</li>
                {show && <li>夏</li>}
                <li>秋</li>
                <li>冬</li>
            </ul>
        </div>
    );
};

const MuiStack = () => {
    const [show, setShow] = useState(false);
    const [animateParent] = useAutoAnimate();

    return (
        <Stack>
            <Button
                variant="outlined"
                sx={{
                    width: 100,
                    height: 40,
                }}
                onClick={() => {
                    setShow(!show);
                }}
            >
                toggle
            </Button>
            <Stack ref={animateParent}>
                <li>春</li>
                {show && <li>夏</li>}
                <li>秋</li>
                <li>冬</li>
            </Stack>
        </Stack>
    );
};

const TransitionGroupComponent = () => {
    const [show, setShow] = useState(false);

    return (
        <Stack>
            <h3>component prop</h3>
            <Button
                variant="outlined"
                sx={{
                    width: 100,
                    height: 40,
                }}
                onClick={() => {
                    setShow(!show);
                }}
            >
                toggle
            </Button>
            <Stack spacing={2} bgcolor={'lightgreen'} direction="row" component={TransitionGroup}>
                <li>春</li>
                {show && (
                    <Collapse orientation="horizontal">
                        <li>夏</li>
                    </Collapse>
                )}
                <li>秋</li>
                <li>冬</li>
            </Stack>
        </Stack>
    );
};

const TransitionGroupChild = () => {
    const [show, setShow] = useState(false);

    return (
        <Stack>
            <h3>child</h3>
            <Button
                variant="outlined"
                sx={{
                    width: 100,
                    height: 40,
                }}
                onClick={() => {
                    setShow(!show);
                }}
            >
                toggle
            </Button>
            <Stack spacing={2} bgcolor={'lightblue'}>
                <TransitionGroup>
                    <li>春</li>
                    {show && (
                        <Collapse>
                            <li>夏</li>
                        </Collapse>
                    )}
                    <li>秋</li>
                    <li>冬</li>
                </TransitionGroup>
            </Stack>
        </Stack>
    );
};

const TransitionGroupFragment = () => {
    const [show, setShow] = useState(false);

    return (
        <Stack>
            <h3>fragment</h3>
            <Button
                variant="outlined"
                sx={{
                    width: 100,
                    height: 40,
                }}
                onClick={() => {
                    setShow(!show);
                }}
            >
                toggle
            </Button>
            <Stack bgcolor={'lightblue'}>
                <TransitionGroup>
                    <li>春</li>
                    {show && (
                        // eslint-disable-next-line react/jsx-no-useless-fragment
                        <>
                            <Collapse>
                                <li>夏</li>
                            </Collapse>
                        </>
                    )}
                    <li>秋</li>
                    <li>冬</li>
                </TransitionGroup>
            </Stack>
        </Stack>
    );
};

export default function AutoAnimate() {
    return (
        <>
            <NativeDiv />
            <MuiStack />
            <TransitionGroupComponent />
            <TransitionGroupChild />
            <TransitionGroupFragment />
        </>
    );
}
