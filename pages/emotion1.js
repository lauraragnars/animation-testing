import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import styles from '../styles/Home.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const variants = {
    closed: { opacity: 1, width: '20vw', left: '70%', top: '70%' },
    open: { opacity: 1, width: '100vw', height: '50vh', left: 0, top: '70%' },
};

export default function Emotion1() {
    const [click, setCLick] = useState(false);
    return (
        <AnimatePresence mode={'wait'}>
            <div className={styles.home}>
                <div className={styles.home__emotion}>
                    <h1 className={styles.home__emotion__title}>EMOTION</h1>
                    {/* <Link href={'/case1'}> */}
                    <motion.div
                        variants={variants}
                        onClick={() => setCLick((click) => !click)}
                        animate={'open'}
                        className={styles.home__emotion__case}
                    ></motion.div>
                    {/* </Link> */}
                    <Link href={'/case1'}>
                        <motion.div
                            className={styles.home__emotion__case}
                        ></motion.div>
                    </Link>
                </div>
            </div>
        </AnimatePresence>
    );
}
