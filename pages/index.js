import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import styles from '../styles/Home.module.scss';
import { motion } from 'framer-motion';
import { useState } from 'react';

const variants = {
    closed: { opacity: 1, width: '150px', left: '70%', top: '70%' },
    open: { opacity: 1, width: '100vw', height: '50vh', left: 0, top: '50%' },
};

const duration = 0.7;

export default function Home() {
    const [click, setCLick] = useState(false);
    return (
        // <Layout>
        <div className={styles.home}>
            <div className={styles.home__emotion}>
                <motion.h1
                    className={styles.home__emotion__title}
                    layout
                    layoutId="emotiontitle1"
                    transition={{ duration: duration }}
                >
                    EMOTION 1
                </motion.h1>
                <Link href={'/emotion1'}>
                    <motion.div
                        className={styles.home__emotion__case}
                        layout
                        layoutId="emotion1"
                        transition={{ duration: duration }}
                    ></motion.div>
                </Link>
                <Link href={'/emotion1'}>
                    <motion.div
                        layout
                        layoutId="emotion1-2"
                        transition={{ duration: duration }}
                        className={styles.home__emotion__case}
                    ></motion.div>
                </Link>
            </div>
            <div className={styles.home__emotion}>
                <motion.h1
                    className={styles.home__emotion__title}
                    layout
                    layoutId="emotiontitle2"
                    transition={{ duration: duration }}
                >
                    EMOTION 2
                </motion.h1>
                <Link href={'/emotion2'}>
                    <motion.div
                        layout
                        layoutId="emotion2"
                        transition={{ duration: duration }}
                        className={styles.home__emotion__case}
                    ></motion.div>
                </Link>
                <Link href={'/emotion2'}>
                    <motion.div
                        className={styles.home__emotion__case}
                    ></motion.div>
                </Link>
            </div>
        </div>
        // </Layout>
    );
}
