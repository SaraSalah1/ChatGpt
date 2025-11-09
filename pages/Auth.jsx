import ChatGptDropdownButton from '../src/components/ChatGptDropdownButton';
import LoginSignupButton from '../src/components/LoginSignupButton';
import Landing from '../src/components/Landing';
import Footer from '../src/components/Footer';
import HelpIcon from '../src/components/HelpIcon';

const Auth = () => {
  return ( <>
     <header className='pt-5 fixed top-0 left-0 w-full z-50 transition-all duration-200 px-3'>
     <div className=' flex justify-between items-center gap-[30px] sm:gap-0'>
      
      <div className='nav-items'>
         <a href="">
        <img src="/src/assets/images/ChatGPT-Logo.png" alt="CahtGpt icon"  
      className=' w-5 h-5' />
      </a>
      <ChatGptDropdownButton/>    
      </div>    
      <nav className='nav-items'>
        <ul className='nav-items'>
          <li className='nav-items'>
            <LoginSignupButton/>
             <HelpIcon/>
          </li>
        </ul>
      </nav>
     </div>
    </header>    
    <Landing/>
    <Footer/>
   </>
  )
}

export default Auth