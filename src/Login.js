import React, { Component } from 'react';
import './footer.css';
import './header.css';
import './login.css';
import './bootstrap.css';
import './fontawesome-free-5.0.4/web-fonts-with-css/css/fontawesome-all.min.css';
class Login extends Component {
    static navigationOptions = {
        title: 'Login'
       };
  render() {
    return (
      <div className="Login">
           <main className="container-fluid">
            <section className="row" id="top">
               <article className="col-md-8 marg">
                    <p>Table reservation online</p>
               </article>
               <article className="col-md-4 marg">
                  <span>Contact Us</span>
                   <span className="fa fa-phone"></span>
                   <button className="btn btn-warning"><a href="Signup">Signup</a></button> 
                  <button className="btn btn-warning"><a href="Login">Login</a></button> 
               </article>
            </section>
            <header className="row">
                <section className="col-md-3" id="top-head">
                    <img src={require("./images/1.png")} id="logo" alt="Logo" />
                </section>
                <nav className="col-md-6" id="top-nav">
                   <ul>
                       <li><a href="Home">Home</a></li>
                       <li><a href="Login">Login</a></li>
                       <li><a href="Signup">Signup</a></li>
                       <li><a href="Home">Blogs</a></li>
                       <li><a href="Home">Contact us</a></li>
                   </ul>
                </nav>
                <section className="col-md-3">
                   <input type="search" placeholder="Enter your text" id="search" /> 
                </section>
            </header>
            <hr/>
                <form method="#" action="#" id="login" class="border-all">
                    <fieldset>
                        <h3>Log In</h3>
                        <input type="email" placeholder="        User Name Or Email" required class="border-all" />
                        <input type="password" placeholder="        User Password" required class="border-all"/>
                        <input type="checkbox"/>
                        <span id="span">Remember Me</span>
                        <p>Forgot Password</p>
                        <input type="submit" value="LOGIN" class=" bg-success border-all"/>
                        <button class="b border-all">
                        <img src="images/2.png" id="fb"/>
                        Login with Fb
                        </button>
                        <button class="but border-all">
                        <img src="images/4.png" id="fb"/>
                        Login with Google 
                        </button>
                        <hr/>
                        <div id="lo">
                            <span>Need New Account</span>
                            <button class="bg-success border-all">Sign Up</button>                   
                        </div>
                    </fieldset>
                </form>
        </main>
        <footer className="container-fluid">
          <section className="row">
           <section className="col-md-4">
              <a href="xyz" >www.Tablora.com</a>
               
           </section>
           <section className="col-md-4">
              <h3>Our Deals</h3>
              <div className="foot_div">
                   <img src={require("./images/6.jpg")} alt="Logo"/>
                   <div className="ma">
                   <h4>Tables</h4>
                   </div>
              </div>
              <div className="foot_div">
                   <img src={require("./images/7.jpg")} alt="Logo"/>
                   <div className="ma">
                   <h4>Tables</h4>
                   </div>
              </div>
               
           </section>
           <section className="col-md-4">
               <h3>Flickr Posts</h3>
               <figure>
                   <img src={require("./images/8.jpg")} className="foot_pic" alt="Logo"/>
                   <img src={require("./images/9.jpg")} className="foot_pic" alt="Logo"/>
                   <img src={require("./images/10.jpg")} className="foot_pic" alt="Logo"/>
                   <img src={require("./images/11.jpg")} className="foot_pic" alt="Logo"/>
                   <img src={require("./images/12.jpg")} className="foot_pic" alt="Logo"/>
                   <img src={require("./images/13.jpg")} className="foot_pic" alt="Logo"/>
               </figure>
           </section>
           </section>
           <hr/>
           <section className="row" id="cen">
           <section className="col-md-12" >
               <span>&copy; 2018 Tablora. All rights reserved</span>
               <div id="last">
                   <img src={require("./images/14.png")} alt="Logo"/>
                   <img src={require("./images/15.png")} alt="Logo"/>
                   <img src={require("./images/16.png")} alt="Logo"/>
               </div>
           </section>
            </section>
            
        </footer>
      </div>
    );
  }
}

export default App;
