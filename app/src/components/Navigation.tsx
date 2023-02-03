import Link from "next/link";

import styles from "@/styles/Navigation.module.scss"
export default function () {
    return (
        <nav className={styles.navigation}>
            <Link href={'/'}>Home</Link>
            <Link href={'/clients'}>Clients</Link>
        </nav>
    )
}