import Link from 'next/link';
import Logo from '../Logo/Logo';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href={'/'}>
                <Logo />
            </Link>
        </header>
    );
}
