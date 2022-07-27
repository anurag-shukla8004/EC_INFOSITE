import React from 'react'
import Image from 'next/image'
function signInPage({}) {
  return (
    <div className='signInMainContainer'>

      <div className='signInFormCotainer'>
      <div className='signInTop'>
        <div>
           <h1 className='signInText'>Sign in</h1>
        <p className='signInpara'>Lorem ipsum dolor sit ame consectetur emet</p>
        </div>
        <div>
        <form>
   
      <input type="text" class="form-control" id="usr"  placeholder='Email'/>


      <input type="password" class="form-control" id="pwd" placeholder='Password'/>

    <div class="form-group">
      <button class="btn btn-success" tabIndex="5"> Log In </button>
    </div>
  </form>
        </div>
          <div>
            <h6>Forgot your password?</h6>
          </div>
       
      </div>

      <div className='signInBottom'>
      <button class="loginBtn loginBtn--google">
  Login with Google
</button>
      <button class="loginBtn loginBtn--facebook">
  Login with Facebook
</button>


      </div>
      </div>

      <div className='signInImageContainer'>
            <Image
              src="/assets/Group 37297.png"
              alt="VPN Illustrasi"
              layout="fill"
              objectFit="cover"
              quality={100}
              width={500}
              height={500}
              layout="responsive"
            />
      </div>
      
    </div>
  )
}

export default signInPage
{}