import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Layout from '../components/layout1';
import useSWR from 'swr';
export default function Storage() {
    return (
        <Layout>
        <Link href="/"><b>Go Home</b></Link>
            <div className={styles.container}>
                
                <StorageData/>
            </div>
        </Layout>
        
        
    
    );
  }



  function StorageData() {
    
    const { data, error } = useSWR('http://127.0.0.1:8000/storage/', storageDetails);
    console.log('new data')
    
    if (error) return <div>failed to load</div>;
    else if (!data) return <div>loading...</div>;
    else {
        let used = data.details[0].used.slice(0,-2)
        let total = data.details[0].available.slice(0,-2)
        let available = parseFloat(total) - parseFloat(used)
        return (
            <div>
                <p>Consumed: {used}MB</p>
                <p>Available: {available}MB</p>
                <p>Your Storage: {total}MB</p>
            </div>
        )

    }
    
  }

  

  export  async function storageDetails() {

    // Get external data from the file system, API, DB, etc.
    var resp;
    let username = 'admin';
    let password = 'admin8122';
    //console.log(btoa(':'));
    Buffer.from(`${username}:${password}`, 'base64');
    let auth = "Basic "+  btoa(`${username}:${password}`); //Buffer.from(`${username}:${password}`, 'base64');//
    //console.log
    //return {"hello":"test"}
    console.log("hello")
    const data =  await fetch('http://127.0.0.1:8000/storage/',{method: 'GET',headers: {'Authorization': auth}
    }).then(response => {  
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
            
          }

        return response
        })
    return  await data.json()
    
}
 
