import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import styles from './layout1.module.css';
export const siteTitle = '2k9 Reader';

export default function Layout({ children }) {
    return (
        <div>
            <Head>
            <title>My first app</title>
            <Script
                        src="https://connect.facebook.net/en_US/sdk.js"
                        strategy="lazyOnload"
                        onLoad={() =>
                        console.log(`script loaded correctly, window.FB has been populated`)
                        }
                    />
            </Head>
            <div className={styles.topnav}>
                <Link href="/">Home</Link>
                <Link href="settings">Settings</Link>
            </div>
            <div>{children}</div>
            <footer>
                <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                Powered by{' '}
                <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
                </a>
            </footer>

            <style jsx>{`
                main {
                padding: 5rem 0;
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                }
                footer {
                width: 100%;
                height: 100px;
                border-top: 1px solid #eaeaea;
                display: flex;
                justify-content: center;
                align-items: center;
                }
                footer img {
                margin-left: 0.5rem;
                }
                footer a {
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;
                color: inherit;
                }
                code {
                background: #fafafa;
                border-radius: 5px;
                padding: 0.75rem;
                font-size: 1.1rem;
                font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
                    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
                }
            `}</style>

            <style jsx global>{`
                html,
                body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }
                * {
                box-sizing: border-box;
                }
            `}</style>
            
        </div>
        
    )
  }