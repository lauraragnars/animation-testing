import React from 'react';
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 0 },
};

export default function Layout(props) {
    return (
        <div key={'layout'}>
            <main
                // initial="hidden"
                // animate="enter"
                // exit="exit"
                // variants={variants}
                transition={{ type: 'linear', delay: 0.5 }}
            >
                {props.children}
            </main>
        </div>
    );
}
