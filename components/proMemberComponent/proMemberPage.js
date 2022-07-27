import React from 'react'

function proMemberPage({}) {
  return (
    <div className='proMemberMainContainer'>
      
    <div className='proMemberContainer'>

     
    <form >
<div className="form">
 <h1 className='signInText'>Pro member</h1>
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

      <div className="column3">
      <div className="radioButtonsContainer">

        <div className='radioButton'>
          <input
          id="windows"
          value="windows"
          name="platform"
          type="radio"

        />
          <h1 className='radioName'>Select Organisation</h1>
        </div>
        <div className='radioButton'>
           <input
          id="mac"
          value="mac"
          name="platform"
          type="radio"

        />
          <h1 className='radioName'>Claim Organisation</h1>
        </div>
        <div className='radioButton'>
             <input
          id="linux"
          value="linux"
          name="platform"
          type="radio"

        />
          <h1 className='radioName'>Create New Organisation</h1>
        </div>
      </div>
      <div className='selectorContainer'>
  <select >
    <option selected value="selected one">selected one</option>
    <option value="b">Selected two</option>
    <option value="c">Selected three</option>
    <option value="d">Selected four</option>
  </select>

</div>
       
      </div> 
      <div className='submitContainer'>
     <input type="submit" value="Register & Pay"  />
  </div>
  </div>
 
 
  </form>
    </div>
    
  </div>
  )
}

export default proMemberPage
{}