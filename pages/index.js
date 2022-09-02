import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import { motion } from 'framer-motion';

const duration = 0.7;

export default function Home() {
    return (
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
    );
}
