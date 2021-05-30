import Head from 'next/head'
import {useState} from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Login from '../Components/Login';

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
                <link rel="icon" href="/Logo.svg" />
                <meta name="description" content={description}></meta>
                <meta name="format-detection" content="telephone=yes"></meta>
            </Head>

            <Navbar LoginOnClick={LoginOnClick} />
            {children}
            <Footer LoginOnClick={LoginOnClick} footerstatic={footerstatic}/>
            <Login warn={login} LoginExitOnClick={LoginExitOnClick} /> 
        </div>
    );
}