import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Layout from '../components/layout1';
export default function FirstPost() {
    return (
        <Layout>
        <Link href="/"><b>Go Home</b></Link>
            <div className={styles.container}>
                
                <div>
                    
                    <h1>This is a epub reader app developed by a hobbyist developer!</h1>
                </div>
            </div>
        </Layout>
        
        
    
    );
  }