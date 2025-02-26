import './../assets/CSS/home.css'
import Navbar from './Components/navbar'
import image from '../assets/Image/student.png'
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const App = ()=>{
  return  (
    <>
      <Navbar/>
      <div className="content">
        <div className="leftside">
          <div className="topside">
            <h1 className="welcome">Welcome to</h1>
            <h1 className="gurushala">Gurushala</h1>
            <h1 className="slogan">
              <FontAwesomeIcon icon={faQuoteLeft} className='quotes' />
              An application for learners
              <FontAwesomeIcon icon={faQuoteRight} className='quotes' />
            </h1>
          </div>
          <div className="bottomside">
            <a href="" className="highclickables">Sign up</a>
            <a href="" className="highclickables">Sign In</a>
          </div>
        </div>
        <div className="rightside">
          <img src={image} className='studentimg'/>
        </div>
      </div>
    </>
  );
}


export default App
