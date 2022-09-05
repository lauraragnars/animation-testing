import { AnimatePresence } from 'framer-motion';
import Header from '../components/Header/Header';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            {/* <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            > */}
            <Component {...pageProps} />
            {/* </AnimatePresence> */}
        </>
    );
}
export default MyApp;
