import { useEffect } from 'react';

export default function StrictMode() {
    useEffect(() => {
        console.log('run effect');
        return () => console.log('clean up');
    }, []);

    return <div>test strict mode</div>;
}
