import React from 'react'

function registration({}) {
  return (
    <div className='registrationMainContainer'>
      
      <div className='registrationContainer'>

       
      <form >
<div className="form">
   <h1 className='signInText'>Free member</h1>
        <div className="column1">
            <input type="text" placeholder="First Name" id="UN" required />
            <input type="text" placeholder="Last Name" id="UN" required />
        </div>
        <div className="column1">
<input type="password" placeholder="Password" id="pw" required />

<input type="email" placeholder="Email" id="e" required />
</div>
        <div className="column2">

            <input type="tel" id="Phone-num" placeholder='Telephone' />

            <textarea id="brieft" cols="42" rows="8" placeholder='About me'></textarea>
        </div> 
        <div className='submitContainer'>
       <input type="submit" value="register"  />
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
   
   
    </form>
      </div>
      
    </div>
  )
}

export default registration
{}