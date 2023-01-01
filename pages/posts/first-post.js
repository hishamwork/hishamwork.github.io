import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';
import Layout from '../../components/layout';
export default function FirstPost() {
    return (
        <Layout>
            <div className={styles.container}>
                
                <div>
                    <Link href="/"><b>Go Home</b></Link>
                    <h1>First Post</h1>
                </div>
            </div>
        </Layout>
        
        
    
    );
  }