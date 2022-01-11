// import React from 'react';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Particle from "./Particle";
// import $ from 'jquery';

const Result = () => {
  return(
    <p>We will contact you soon... </p>
  );
}
const Download = () => {
  return(
    <div className="Portfolio">
    <a href="assets/Shellcode_Portfolio.zip" download><pre><i class="fa fa-download" aria-hidden="true"></i> Portfolio</pre></a>
    </div>
  );
}

const Home = () => {
// render(){
 
  
    const [isMobile, setIsMobile] = useState(true);
    
    
      const[result, showResult] = useState(false);
      
      function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(
        "serviceID",// emailjs Service ID
        "templateID",// template ID
        e.target,
        "user_**********"// emailjs Integration init("user_**********");

        )
        // .then(res=>{
        //   console.log(res);
        // }).catch(err=> console.log(err));

        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
        e.target.reset();
        showResult(true);
      }
      



      // button
      

    
return(
<>

<Particle/>
<div class="remove">

<section class="home" id="">
<div class="max-width" >
<div class="home-content">
<div class=" right">
<div class="text-2">YOU HAVE FOUND THE BEST MOBILE APP DEVELOPMENT COMPANY</div>
<div class="text-3">If you need the best custom iOS or Android app for your brand, you have found the right fit! ShellCode Solutions will do that for you.</div>
{/* <div ><img src="assets/images/man.png" alt="" className={isMobile ? "res-img-mobile" : "res-img"}/></div> */}
<a href="https://wa.me/+918097355922">Book a Consultant</a>
</div>
<div class=" left">
<img src="assets/images/man.png" alt="1" class="res-img"/>

</div>

</div>


</div>
</section>

{/* <!-- our Clients --> */}

<section class="our">
<div class="max-width">
<div class="text">Our<br/><span>Clie</span>nts</div>
{/* <div class="our-content"> */}


<div class="slider">
  <div class="slide-track">
    <div class="slide">
      <img src="assets/images/1.jpg"/>
      <img src="assets/images/2.jpg"/>
      <img src="assets/images/3.jpg"/>
      <img src="assets/images/4.jpg"/>
      <img src="assets/images/5.jpg"/>
      <img src="assets/images/6.jpg"/>
      {/* <img src="assets/images/7.jpg"/> */}
      <img src="assets/images/8.jpg"/>
      <img src="assets/images/9.jpg"/>
      <img src="assets/images/10.jpg"/>
      <img src="assets/images/11.jpg"/>
      <img src="assets/images/12.jpg"/>
      <img src="assets/images/13.jpg"/>
      <img src="assets/images/14.jpg"/>
      <img src="assets/images/15.jpg"/>
      <img src="assets/images/chicago.jpeg"/>
      <img src="assets/images/vichola.jpeg"/>
    </div>
    <div class="slide">
      <img src="assets/images/1.jpg"/>
      <img src="assets/images/2.jpg"/>
      <img src="assets/images/3.jpg"/>
      <img src="assets/images/4.jpg"/>
      <img src="assets/images/5.jpg"/>
      <img src="assets/images/6.jpg"/>
      {/* <img src="assets/images/7.jpg"/> */}
      <img src="assets/images/8.jpg"/>
      <img src="assets/images/9.jpg"/>
      <img src="assets/images/10.jpg"/>
      <img src="assets/images/11.jpg"/>
      <img src="assets/images/12.jpg"/>
      <img src="assets/images/13.jpg"/>
      <img src="assets/images/14.jpg"/>
      <img src="assets/images/15.jpg"/>
      <img src="assets/images/chicago.jpeg"/>
      <img src="assets/images/vichola.jpeg"/>
    </div>
    
   
    
   
    
    
    
    
</div>
</div> 
</div>
</section>





{/* <!-- about section start --> */}
<section class="about" id="">
<div class="text">Services<br/><span>We</span> Provide</div>
<div class="max-width1" >

<div class="about-content">


<div class=" right">

<h3> App Development<br/>
<h5>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion for our specialties and a dedication to delivering exceptional results. Each of us brings our unique skill set and love for what we do. Because ultimately, our difference lies in how much we care.<br/>
</h5></h3>
</div>
<div class=" left">
<img src="assets/images/mobile.png" alt="1"/>

</div>
</div>

</div>


{/* <!-- web --> */}

<div class="max-width1">

<div class="about-content">

<div class=" left">
<img src="assets/images/website.png" alt="1"/>
</div>
<div class=" right">
{/* <!-- <div class="text">Technologies<span class="typing-2"></span></div> --> */}
<h3> Web Development<br/>
<h5>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion for our specialties and a dedication to delivering exceptional results. Each of us brings our unique skill set and love for what we do. Because ultimately, our difference lies in how much we care.<br/>
</h5></h3>
</div>
</div>
</div>

{/* <!-- designing --> */}

<div class="max-width1">
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">

<div class=" right">

<h3> Designing
<h5>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion for our specialties and a dedication to delivering exceptional results. Each of us brings our unique skill set and love for what we do. Because ultimately, our difference lies in how much we care.</h5>
</h3>
</div>
<div class=" left">
<img src="assets/images/design.png" alt="1"/>
</div>
</div>
</div>

{/* <!-- Optimization --> */}

<div class="max-width1">
<div class="about-content">
<div class=" left">
<img src="assets/images/seo.png" alt="1"/>
</div>
<div class=" right">
<h3>Search Engine <br/> Optimization<br/>
<h5>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion for our specialties and a dedication to delivering exceptional results. Each of us brings our unique skill set and love for what we do. Because ultimately, our difference lies in how much we care.</h5>
</h3>
</div>
</div>
</div>

{/* <!-- button --> */}

<div class="max-width">

<div class="about-content">
<div class=" right">
<a href="#teams">Explore More</a>
</div>
</div>
</div>
</section>

{/* <!-- services --> */}

<section class="services" id="">
<div class="max-width">
<h2 class="title">What Our Clients S<span>ay </span></h2>
<h3> They Love Our Service</h3>

<div class="serv-content">
<div class="card">
<div class="box">


<h5><br/><br/>Amazing experience at Shellcode! Very profrssional staff and exxcellent service, must check them out. 
</h5><br/>

<img src="assets/images/white.png" alt=""/>
<div class="text">Melvin Mathews</div>
</div>
</div>
<div class="card">
<div class="box">

<h5>One of the best company i have seen with such a excellent service and everything being perfect! Shelllcode solutions would never disappoint you by their service ! Shellcode solutions made that worry go away by growing by business from the internet! Really appreciated for the hard work they do in short period of time !</h5>
<img src="assets/images/white.png" alt=""/>
<div class="text">Karan Joshi</div>
{/* <h4>Developer, UK, London</h4> */}
</div>
</div>
<div class="card">
<div class="box">
<h5>Best website designing company i have come across, Their work is always better than what you expect, I give 100% for their customer service, I recommend shell codes to all of them looking for a website designer i am pretty sure they will surprise you with their good work.</h5>
<img src="assets/images/white.png" alt=""/>
<div class="text">Akash Yadav</div>
{/* <h4>Developer, UK, London</h4> */}
</div>
</div>
</div>
</div>

</section>



<section class="quote">
<div class="max-width">
<div class="quote-content">
<div class=" left">
<h3>Get a quo<span>te </span></h3>
<img src="assets/images/1.png" alt="1"/>
</div>
<div class=" right">
<div class="menu2">
<ul>
<li><a href="/service">Services</a></li>
<li><a href="/technology">Technology</a></li>
<li><a href="/projects">Projects</a></li>
<li><a href="/about">About Us</a></li>
<li><a href="/blog">Blog</a></li>
<li><a href="https://wa.me/+918097355922">Contact Us</a></li>
</ul>
</div>
</div>
</div>
</div>


{/* <!-- contact --> */}

{/* <!-- contact section start --> */}

<div class="max-width1">
<div class="contact-content">


<div class="column right">
<form action="" onSubmit={sendEmail}>
<div class="fields">
<div class="field name">
<input type="text" placeholder="Name"  name="name" required/>
</div>
<div class="field email">
<input type="text" placeholder="Company" name="company" required/>
</div>
</div>
<div class="fields">
<div class="field name">
<input type="text" placeholder="Phone" name="phone" required pattern="[0-9]{10-15}"/>
</div>
<div class="field email">
<input type="text" placeholder="Email" name="email" required pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$"/>

</div>
</div>

<div class="field textarea">
<textarea placeholder="Message.." 
name="message"  required></textarea>
</div>
<div className="sentmsg">{result ? <Download/> : null}</div>
<div className="sentmsg">{result ? <Result/> : null}</div>
<div class="button-area" >
<button type="submit" 
onSubmit={(values, {resetform}) => {
  console.log('', values);
  resetform({values: ''})
}
}>Download Portfolio<pre></pre></button>

</div>
</form>
</div>
</div>
</div>

</section>


{/* <!-- contact section start --> */}


</div>
</>

);
}


export default Home;
