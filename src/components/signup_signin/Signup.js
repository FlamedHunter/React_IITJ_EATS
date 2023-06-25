import React from 'react'
import './signup.css'

const Signup = () => {
  return (
    <>
        <div className='signupcontainer'>
            <div className='signupheading'>  
                <h2>Welcome to</h2>
                <h2 className='signupiitjeats'>IITJEATS</h2>
                <span> All your all favourite eating spots under one roof.</span>
                <span className='signupiitjeats'> Order Now</span>
            </div>


            <div className='signupbottom'>
                <div className='signinwithtext'>
                    <span>Signin With</span> 
                </div>

                <a href='/' className='signupbutton'>
                    <div>
                          <img className='signupgoogleiconbox' src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" />
                    </div>

                    <span className='siginingoogletext'>GOOGLE</span>

                </a>
            </div>

        </div>
    </>
  )
}

export default Signup
