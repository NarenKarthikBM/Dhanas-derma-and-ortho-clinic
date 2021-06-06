import Custom_head from '../Components/Custom_Head'
export default function Home() {
  return (
    <div className="textcenter">
        <Custom_head title="Log-in/Sign-up" />
        <div className="logo"><img src="/Logo.svg" alt="Logo" /></div>
        <a className="h1 loginlink" href="https://www.dhanasclinic.com">Login/SignUp To Access Dashboard</a>
    </div>
  )
}
