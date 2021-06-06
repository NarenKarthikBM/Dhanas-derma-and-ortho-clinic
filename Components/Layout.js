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
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="description" content={description}></meta>
                <meta name="author" content="Naren Karthik B M" />
                <meta name="format-detection" content="telephone=yes"></meta>
            </Head>

            <Navbar LoginOnClick={LoginOnClick} />
            {children}
            <Footer LoginOnClick={LoginOnClick} footerstatic={footerstatic}/>
            <Login warn={login} LoginExitOnClick={LoginExitOnClick} /> 
        </div>
    );
}