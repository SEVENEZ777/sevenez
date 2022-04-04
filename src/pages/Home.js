import logo from '../img/logo.png'
import './Home.css'
import background from '../img/earth.jpg'
import SignInPage from './SignInPage'

export default function Home() {
  
  
  
  return (
    <div className="background"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          
        }}
      >
      <div className="container"></div>
      <h1 className="title-home"><strong>WELCOME TO THE WORLD OF<br></br> 7EZ</strong></h1>
      <h2 className="subtitle-home">CREATE FUTURE</h2>
      <img className="logo" src={logo} alt="logo" />;
      <div className="vision">
          <h4 className="header">the number</h4>
          <h1 className="seven">7 7 7</h1>
          <p className="text"><strong>is one of four angel numbers <br  /> it appears to you as a symbol of luck and healthiness <br /> while staring at these numbers <br /> you are sending a signal to your guardian angels <br /> who protect you and lead you on the true path <br /> to manifest your dreams.<br />take a closer look on our logo <br /> and be part of something special <br /><br /></strong></p>
      </div>
      <div className='sign-in'><SignInPage /></div>
    </div>
  )
}