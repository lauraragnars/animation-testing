import Link from 'next/link';
import styles from '../styles/Home.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

const duration = 0.7;

const variants = {
    enter: { opacity: 1 },
    exit: { opacity: 0 },
};

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
                <Link href={'/case1'}>
                    {/* <motion.div
                        className={styles.home__emotion__case}
                        layout={'position'}
                        layoutId="emotion1"
                        transition={{ duration: duration }}
                        style={{
                            width: 150,
                            height: 150,
                            top: '70%',
                            left: '70%',
                            position: 'absolute',
                        }}
                    >
                        
                    </motion.div> */}
                    <motion.img
                        layout
                        layoutId="emotion1"
                        transition={{ duration: duration }}
                        style={{
                            width: 150,
                            height: 'auto',
                            top: '70%',
                            left: '70%',
                            position: 'absolute',
                            objectFit: 'cover',
                        }}
                        src="https://thumbs.dreamstime.com/b/handsome-guy-face-17205111.jpg"
                    ></motion.img>
                </Link>
                {/* <Link href={'/emotion1'}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="case1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: duration }}
                            className={styles.home__emotion__case}
                        ></motion.div>
                    </AnimatePresence>
                </Link> */}
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
            <div className={styles.home__emotion}>
                <motion.h1
                    className={styles.home__emotion__title}
                    layout
                    layoutId="emotiontitle3"
                    transition={{ duration: duration }}
                >
                    EMOTION 3
                </motion.h1>
                <Link href={'/emotion1'}>
                    {/* <motion.div
                        className={styles.home__emotion__case}
                        layout={'position'}
                        layoutId="emotion1"
                        transition={{ duration: duration }}
                        style={{
                            width: 150,
                            height: 150,
                            top: '70%',
                            left: '70%',
                            position: 'absolute',
                        }}
                    >
                        
                    </motion.div> */}
                    <motion.img
                        layout
                        layoutId="emotion3"
                        transition={{ duration: duration }}
                        style={{
                            width: 150,
                            height: 150,
                            top: '70%',
                            left: '70%',
                            position: 'absolute',
                            objectFit: 'cover',
                        }}
                        src="https://thumbs.dreamstime.com/b/handsome-guy-face-17205111.jpg"
                    ></motion.img>
                </Link>
                {/* <Link href={'/emotion1'}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key="case1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: duration }}
                            className={styles.home__emotion__case}
                        ></motion.div>
                    </AnimatePresence>
                </Link> */}
            </div>
        </div>
    );
}
