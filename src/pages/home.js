// import React from 'react';
import React, { Component, useEffect, useState } from 'react';
import Particles from "react-tsparticles";
import emailjs from 'emailjs-com';
// import axios from 'axios';
import $ from 'jquery';

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
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
      // const menuBtn = document.querySelector('.menu-btn')
      // const navlinks = document.querySelector('.menu')

      // menuBtn.addEventListener('click', ()=>{
      //   navlinks.classList.toggle('mobile-menu')
      // })
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





{/* <div class="particles"> */}

<Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 100,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
{/* </div> */}



















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
      <img src="assets/images/7.jpg"/>
      <img src="assets/images/8.jpg"/>
      <img src="assets/images/9.jpg"/>
      <img src="assets/images/10.jpg"/>
      <img src="assets/images/11.jpg"/>
      <img src="assets/images/12.jpg"/>
      <img src="assets/images/13.jpg"/>
      <img src="assets/images/14.jpg"/>
      <img src="assets/images/15.jpg"/>
    </div>
    <div class="slide">
      <img src="assets/images/1.jpg"/>
      <img src="assets/images/2.jpg"/>
      <img src="assets/images/3.jpg"/>
      <img src="assets/images/4.jpg"/>
      <img src="assets/images/5.jpg"/>
      <img src="assets/images/6.jpg"/>
      <img src="assets/images/7.jpg"/>
      <img src="assets/images/8.jpg"/>
      <img src="assets/images/9.jpg"/>
      <img src="assets/images/10.jpg"/>
      <img src="assets/images/11.jpg"/>
      <img src="assets/images/12.jpg"/>
      <img src="assets/images/13.jpg"/>
      <img src="assets/images/14.jpg"/>
      <img src="assets/images/15.jpg"/>
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
{/* <div class="column left">

<span>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals 
<br/><br/>Our contact details</span>
<div class="head">+91 8097355922<br/>biz@shellcode.co.in</div>
<div class="icons">
</div>
</div> */}

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
}>Send</button>
{/* <a href="assets/portfolio.pdf" download>Send</a> */}
</div>



</form>

{/* pattern="^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$" */}
</div>
</div>
</div>

</section>


{/* <!-- contact section start --> */}

<footer class="footer">
<div class="container">
<div class="row">
<div class="footer-col">
{/* <div className="circl"> */}
<a href="/"><img src="assets/images/shellcode.jpg" alt=""/></a>
{/* </div> */}
<ul>
<li><a href="#">About ShellCode</a></li>
{/* <li><a href="#"><br/>Est. Date</a></li> */}

</ul>
</div>
<div class="footer-col">
<h4>Contact</h4>
<ul>
<li><a href="#">+91 8097355922</a></li>
<li><a>biz@shellcode.co.in</a></li>
</ul>
</div>
<div class="footer-col">
<h4>Explore</h4>
<ul>
<li><a href="/service">Services</a></li>
<li><a href="/technology">Technology</a></li>
<li><a href="/projects">Projects</a></li>
<li><a href="/about">About Us</a></li>
<li><a href="/blog">Blog</a></li>
<li><a href="https://wa.me/+918097355922">Contact Us</a></li>
</ul>
</div>
<div class="footer-col">
<h4>Follow Us</h4>
<ul>
<li><a href="https://instagram.com/shellcode_it_services?utm_medium=copy_link">Instagram</a></li>
<li><a href="https://www.linkedin.com/company/shellcode-solutions">Linkediin</a></li>
<li><a href="https://twitter.com/login?lang=en">Twitter</a></li>
<li><a href="https://m.facebook.com/shellcodesolutions/">Facebook</a></li>
</ul>
</div>
</div>
</div>

</footer>

</div>
</>

);
}






export default Home;
