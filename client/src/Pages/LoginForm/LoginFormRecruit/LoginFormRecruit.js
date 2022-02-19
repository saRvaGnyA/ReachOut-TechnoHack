import React from 'react'
import './LoginFormRecruit.css'
const LoginFormRecruit = () => {
  return (
    <div className="login bg-gray-900">
    {/* <img className="wave z" src="https://lh3.googleusercontent.com/knryCgwtENwj9-QIcq5mQG5hK6PikEpkExZXsKJKej1ATyFaCx-hpoJdQKBDqCVtxPRa2c_w9Bu13lMjXba90MPGzlsngO6kzlGEAVh1v-Vgqzz1tLIxodhdVpNN6wuytP_Vcs3FJw=w2400" alt=""/> */}
    <div className="form-container">
      <div className="img-bg">
        <img src="https://lh3.googleusercontent.com/YVg4YPQXmvmph-HNtIWmjqLKTefRpsmx7-FN9QnvanrTKNSFzIS2lH7bRy3HnvbQcKMw5OvsXn7AdjNSBQDdDcgJbHVaqJMo-o2qBnKWieWJSAvrD2fYxOkF8IEBPfNgJOqjpchc3A=w2400" alt=""/>
      </div>
      <div className="login-content">
        <form className="login-form">
          <h2 className="title text-white text-bold">Login to Register A Job</h2>
                 <div className="input-div one">
                    <div className="i">
                    <i classNameName="fa fa-user" aria-hidden="true"></i>
                    </div>
                    <div className="div">
                        <input type="email" className="input" placeholder="Email addresss..."/>
                    </div>
                 </div>
                 <div className="input-div pass">
                    <div className="i"> 
                    <i classNameName="fa fa-lock" aria-hidden="true"></i>
                    </div>
                    <div className="div">
                       <input type="password" className="input"  placeholder="Password...."/>
                   </div>
                </div>
                <a href="/" className="forgot-password">Forgot Password?</a>
                <input type="submit" className="btn-login" value="Login"/>
              </form>
          </div>
      </div>
      </div>
  )
}

export default LoginFormRecruit;
