import React, { Component } from 'react';
import './footer.css';
import './header.css';
import './main.css';
import './login.css';
import './bootstrap.css';
import './fontawesome-free-5.0.4/web-fonts-with-css/css/fontawesome-all.min.css';
class App extends Component {
  render() {
    return (
      <div className="App">
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
            <section className="row" id="main_pic">
                   <img src={require("./images/banner.jpg")} alt="Logo"  />         
                   <article id="text">
                      Welcome To The Tablora Restaurant
                   </article>
                   <article id="sec_text">
                       Amazing And Delicious Dishes Only With Us !
                   </article>
                   <article id="book">
                      <form className="border-all" id="book_form"  >
                          <fieldset>
                              <h2>Book A Table</h2>
                              <br/>
                              <label id="label">Date</label>
                              <br/>
                              <input type="date" required/>
                              <br/>
                              <label id="label">Meal</label>
                              <br/>
                              <select id="select" required>
                              <optgroup>
                                    <option value="Please Select Your Meal">(Please Select Your Meal)</option>
                                    <option value="Breakfast">Breakfast</option>
                                    <option value="Lunch">Lunch</option>
                                    <option value="Dinner">Dinner</option>
                              </optgroup>
                             </select>
                             <br/>
                             <label id="label">Guests</label>
                             <br/>
                             <select id="select">
                              <optgroup>
                                    <option value="Please Select Guests">(Please Select Guests)</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="More">More</option>
                              </optgroup>
                             </select>
                             <br/>
                             <label id="label">Your Suggestions</label>
                             <br/>
                             <textarea id="textarea" rows="3" cols="30"></textarea>
                             <br/>
                             <button id="butto">Make Your booking</button>
                          </fieldset>
                      </form>
                   </article>
            </section>
            <section className="row" id="food">
                <article className="col-md-4">
                   <h5>Opening Hour</h5>
                    <p>
                       Monday - to - Saturday<br/>
                        11:00 AM to 11:00 PM
                    </p>
                    <p>
                            Sunday at<br/>
                        12:00 AM to 12:00 PM
                   </p>
                    
                </article>
                <article className="col-md-4">
                   <h5>Location</h5>
                   <p>Tablora Restaurant,</p><br/>
                   <p>Near Chowk Pakisatn,</p><br/>
                   <p>Gujrat City.</p>
                    
                </article>
                <article className="col-md-4">
                   <h5>Famous Dishes</h5>
                   <figure>
                       <img src={require("./images/17.jpg")} className="dish" alt="Logo"/>
                       <img src={require("./images/18.jpg")} className="dish" alt="Logo"/>
                       <img src={require("./images/19.jpg")} className="dish" alt="Logo"/>
                       <img src={require("./images/20.jpg")} className="dish" alt="Logo"/>
                       
                   </figure>
                    
                </article>
            </section>
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
