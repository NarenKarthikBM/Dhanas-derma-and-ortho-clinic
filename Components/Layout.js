import Head from 'next/head'
import {useState} from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Login from './Login';

export default function Layout({ children , footerstatic, description, title}) {
    const [login, setLogin] = useState(false);
  
    const LoginOnClick = () => {
        setLogin(true);
    };

    const LoginExitOnClick = () => {
        setLogin(false);
    };
    return (
        <div className="container">
            <Head>
                <title>{title}</title>
                <meta charSet="UTF-8" />
                <link rel="icon" href="/Logo.svg" sizes="any" type="image/svg+xml" />
                <meta name="description" content={description}></meta>
                <meta name="author" content="John Doe" />
                <meta name="format-detection" content="telephone=yes"></meta>
            </Head>

            <Navbar LoginOnClick={LoginOnClick} />
            {children}
            <Footer LoginOnClick={LoginOnClick} footerstatic={footerstatic}/>
            <Login warn={login} LoginExitOnClick={LoginExitOnClick} /> 
        </div>
    );
}