import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Layout from '../components/layout1';
export default function Settings() {
    return (
        <Layout>
        <Link href="/"><b>Go Home</b></Link>
            <div className={styles.container}>
                <div>
                    <Link href="storage">Storage</Link><br></br>
                    <Link href="about">About</Link><br></br>
                    <Link href="signin">Sign out</Link><br></br>
                </div>
            </div>
        </Layout>
        
        
    
    );
  }