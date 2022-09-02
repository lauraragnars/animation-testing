import Layout from '../components/Layout/Layout';
import styles from '../styles/Emotion1.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
    exit: { opacity: 1, width: '20vw', left: '70%', top: '70%' },
    open: {
        opacity: 1,
        width: '100vw',
        height: '50vh',
        left: 0,
        top: '50%',
        duration: 2,
    },
};

const variants2 = {
    open: { opacity: 0 },
};

const variants3 = {
    open: { top: '20%' },
};

const duration = 0.7;

export default function Emotion1() {
    return (
        <Layout>
            <div key={'emotion1'} className={styles.emotion1}>
                <div className={styles.emotion1__emotion}>
                    <motion.h1
                        className={styles.emotion1__emotion__title}
                        layout
                        layoutId="emotiontitle2"
                        transition={{ duration: duration }}
                    >
                        EMOTION 2
                    </motion.h1>
                    <motion.div
                        className={styles.emotion1__emotion__case1}
                        layout
                        layoutId="emotion2"
                        transition={{ duration: duration }}
                    ></motion.div>
                    <motion.div
                        key={'2'}
                        variants={variants2}
                        animate={'open'}
                        transition={{ duration: duration }}
                        exit={'exit'}
                        className={styles.emotion1__emotion__case}
                    ></motion.div>
                </div>
            </div>
        </Layout>
    );
}
