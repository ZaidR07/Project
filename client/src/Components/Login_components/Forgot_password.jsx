import React from 'react'

const Forgot_password = () => {
  return (
    <styledForget>
    <div className='container'>
      <h1>Forget Password</h1>
      <label htmlFor="email">Email</label>
            <br />
            <br />
            <input name="email" id="email" className="contact-inputs" type="text" required />
    </div>

    </styledForget>
  )
}

export default Forgot_password;