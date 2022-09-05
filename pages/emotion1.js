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
                        layoutId="emotiontitle1"
                        transition={{ duration: duration }}
                    >
                        EMOTION 1
                    </motion.h1>
                    {/* <motion.div
                        className={styles.emotion1__emotion__case}
                        layout={'position'}
                        layoutId="emotion1"
                        transition={{ duration: duration }}
                        style={{
                            width: '100vw',
                            height: '50vh',
                            top: '60%',
                            left: '0%',
                            position: 'absolute',
                        }}
                    >
                        
                    </motion.div> */}
                    <motion.img
                        layout
                        layoutId="emotion1"
                        transition={{ duration: duration }}
                        style={{
                            width: '100vw',
                            height: 'auto',
                            top: '60%',
                            left: '0%',
                            position: 'absolute',
                            objectFit: 'cover',
                        }}
                        src="https://thumbs.dreamstime.com/b/handsome-guy-face-17205111.jpg"
                    ></motion.img>
                </div>
            </div>
        </Layout>
    );
}
