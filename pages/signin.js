import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Layout from '../components/layout';
import FacebookLogin from 'react-facebook-login';
export default function SignIn() {

    
    return (
        <Layout>
            <div className={styles.container}>
                
                <form>
                    <label>User name</label>
                    <input type='text'></input>
                    <label>Password</label>
                    <input type='password'></input>
                    <button>Sign in</button>
                    {/* <a href='http://127.0.0.1:8000/oauth/login/facebook'><button>Sign In with facebook</button></a> */}
                    <br></br>
                    <h1>LOGIN WITH FACEBOOK</h1>

<FacebookLogin
  textButton="LOGIN WITH FACEBOOK"
  appId= "<FACEBOOK APP ID>"
  fields="name,email,picture"
  callback={fbResponse}
/>
                    {/* <Link href="http://localhost:8000/oauth/login/facebook">Sign in with facebook</Link> */}
                    <Link href="http://localhost:8000/whoami">whoami</Link>
                    <p>Don't have an account? <Link href="/">Sign Up!</Link></p>
                </form>
            </div>
        </Layout>
        
        
    
    );
  }

  const fbResponse = (response) => {
    console.log(response);
  }
