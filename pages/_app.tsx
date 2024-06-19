import type { AppProps } from 'next/app';
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <ProgressBar
                // height="4px"
                // color="#fffd00"
                // options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    );
}
