import { useState, useRef, type ReactNode, useMemo } from 'react';

function Comp({ count }: { count: number }) {
    console.log('Comp render, count:', count);
    return <div>Comp</div>;
}

export default function Renderer() {
    const ref = useRef<ReactNode | null>(null);
    const [count, setCount] = useState(0);

    const c = useMemo(() => {
        if (!ref.current) {
            ref.current = <Comp count={count} />;
        }
        return ref.current;
    }, []);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <p>{count}</p>
            {count % 2 === 0 ? ref.current : null}
        </div>
    );
}
