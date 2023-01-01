import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Layout from '../components/layout1';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import SingleBookData from '../components/singleBook';
// import getAllBooks from '../lib/books'
import useSWR from 'swr';
export default function MyBooks({props}) {
    const books =  props
    
    return (

        <Layout>
        <Link href="/"><b>Go Home</b></Link>
            <div >
            <BooksData/>
                
            </div>  

            <WhoAmI/>
        </Layout>
        
        
    
    );
  }



  function BooksData() {
    const { data, error } = useSWR('http://127.0.0.1:8000/books/', getAllBooks);
    console.log('new data')
    
    if (error) return <div>failed to load</div>;
    else if (!data) return <div>loading...</div>;
    else {
        console.log(data.details[0].data)
        return (
            <div>
            {data.details[0].data.map(({ pk, fields }) => (
                <div key={pk}>
                <SingleBookData  book={fields}/>
                </div>
             
            
          ))}
         
        </div>

        )

    }
    
  }
  function WhoAmI() {
    const { data, error } = useSWR('http://localhost:8000/whoami/', getMyName);
    console.log('new data')
    
    if (error) return <div>failed to load</div>;
    else if (!data) return <div>loading...</div>;
    else {
        console.log("user data")
        console.log(data)
        return (
            <div>
            {data}
            
                </div>
        )

    }
    
  }
  

  export  async function getAllBooks() {

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
    const data =  await fetch('http://localhost:8000/books/',{method: 'GET',//headers: {'Authorization': auth}
    }).then(response => {  
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
            
          }

        return response
        })
    return  await data.json()
    
}

export  async function getMyName() {

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
    const data =  await fetch('http://localhost:8000/whoami/',{method: 'GET',//headers: {'Authorization': auth}
    }).then(response => {  
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
            
          }

        return response
        })
    return  await data.json()
    
}
 

