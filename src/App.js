import './App.css';

function App() {
  return (
    <div className="container">
    <div >
       
        <img className='img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
        </div>
        <div className='span'>
        <span>SOME RANDOM TEXT, SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT</span>
        </div>

             {/* ..............Form......... */}

        <div className='login-signup'>
          <span className='login'>Login</span>
          <span className='signup'>Signup</span>
        </div>
        <div className='path'></div>

        <div>
          <input className='email' type="text" placeholder="Email Address" />
        </div>
        <div >
          <input className='password' type="password" placeholder="Password" />
        </div>
        <button>LOGIN</button>
        <div className='forgot'>
          <span >Forgot Password?</span>
        </div>
        <div>
          <p className='or-login'>or login with</p>
        </div>
      
      {/* ........social media....... */}

        <div className='social-media'>
        <img className='google' alt='google' src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png' />
        <img className='facebook'  alt='facebook' src='https://www.freeiconspng.com/thumbs/facebook-logo-png/facebook-f-logo-transparent-facebook-f-22.png'/>
        <img className='twitter'  alt='twitter' src='https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png'/>

        </div>

        {/* footer................. */}
        <div className='account'>
          <span className='have-an-account'>Don’t have an account?</span><span className='create'>Create new now!</span>
        </div>
        <div className='terms'>
          <span className='agree'> By signing up, you are agree with our </span><span className='term-condition'>Terms & Conditions</span>
        </div>
    </div>
  );
}

export default App;
