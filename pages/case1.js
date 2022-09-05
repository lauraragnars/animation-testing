import Layout from '../components/Layout/Layout';
import styles from '../styles/Case1.module.scss';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const duration = 0.7;

export default function Case1() {
    const router = useRouter();

    useEffect(() => {
        router.beforePopState(({ as }) => {
            if (as !== router.asPath) {
                window.scrollTo(0, 0);
            }
            return true;
        });

        return () => {
            router.beforePopState(() => true);
        };
    }, [router]);

    return (
        <Layout>
            <div key={'emotion1'} className={styles.case}>
                <div className={styles.case__emotion}>
                    <motion.h1
                        className={styles.case__emotion__title}
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
                <div className={styles.case__block}>
                    <h1>Bla</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris ut pellentesque turpis. Nam dictum pretium elit
                        vitae hendrerit. Ut lectus enim, fringilla quis nibh
                        sed, dapibus semper odio. Curabitur sagittis mattis
                        massa, id sagittis erat malesuada ultricies. Donec at
                        nisi nec mauris convallis gravida porta quis lorem.
                        Donec vestibulum tempor tellus, in tincidunt diam
                        ultrices eu. Etiam vitae luctus sapien. Curabitur non
                        malesuada lorem. Suspendisse et magna maximus, tristique
                        quam vitae, volutpat sapien. Nulla a congue velit, et
                        blandit libero.
                    </p>
                    <button
                        onClick={() => {
                            window.scrollTo(0, 0);
                            //router.replace('/');
                        }}
                    >
                        Go back
                    </button>
                </div>
            </div>
        </Layout>
    );
}
