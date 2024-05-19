
import Link from 'next/link'
import styles from './menu.module.css'
export default function ({ children, }: Readonly<{ children: React.ReactNode; }>) {

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div className={styles.container}>
                <Link className={styles.link} href="/home"> Home</Link>
                <Link className={styles.link} href="/cv"> cv</Link>
                <Link className={styles.link} href="/illustration"> illustration</Link>
                <Link className={styles.link} href="/modelisation"> Modelisation 3D</Link>
            </div>
            {children}
        </div>
    )
}
