import React from 'react'

function Login() {
  return (
    <div className='login' style={{width:'100%', height:'80vh' ,}}>
      <form action="" >
        <label htmlFor="name" >Name</label>
        <input type="text" id='name' placeholder='Please Enter Your Name Here'/>
        <label htmlFor="email">Email</label>
        <input type="text" id='email'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Login
