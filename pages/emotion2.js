import Layout from '../components/Layout/Layout';
import styles from '../styles/Emotion1.module.scss';
import { motion } from 'framer-motion';

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
                        className={styles.emotion1__emotion__case}
                        layout
                        layoutId="emotion2"
                        transition={{ duration: duration }}
                    ></motion.div>
                </div>
            </div>
        </Layout>
    );
}
