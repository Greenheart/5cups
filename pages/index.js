import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>5 cups</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>5 cups</h1>
            </main>

            <footer className={styles.footer}>
                <a href="https://29k.org" className={styles.logo}>
                    Inspired by{' '}
                    <Image
                        src="/29k.jpg"
                        alt="29k Logo"
                        width={32}
                        height={32}
                    />
                </a>
            </footer>
        </div>
    )
}
