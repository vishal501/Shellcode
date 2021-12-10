// import React from 'react';
import React, { Component, useEffect, useState } from 'react';
import Particles from "react-tsparticles";
import $ from 'jquery';
// import TestiMonialsDetails from './pages/TestiMonialsDetails'
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';

// import Carousel from "react-elastic-carousel";
// import Card from "./Card";
// import Item from "./Item";


const Home = () => {
// render(){
  

    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
      
      


    
return(
<>




<div>
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




{/* <div id="particles-js"></div> */}

{/* <div class="text1">


<h1>We build software solution that move you forward</h1>
<p>
We build software solution <br/>that move you forward </p>
<a href="#">Book a Consultant</a>
</div>
<div class="homeimage">
<img src="assets/images/man.png"/>
</div> */}


<nav class="navbar">
<div class="max-width">
{/* <div class="logo"><a href="#">Logo</a></div> */}
<div class="logo"><a href="/"><img src="assets/images/shellcode.jpg" alt=""/></a></div>
<ul class="menu">
<li><a href="/Service" class="menu-btn">Services</a></li>
<li><a href="/technology" class="menu-btn">Technology</a></li>
<li><a href="/about" class="menu-btn">About Us</a></li>
<li><a href="/blog" class="menu-btn">Blog</a></li>
<li><a href="/projects" class="menu-btn">Projects</a></li>

</ul>
</div>
</nav>
{/* <!-- home section start --> */}
<section class="home" id="">
<div class="max-width" >
<div class="home-content">
<div class=" right">
<div class="text-2">YOU HAVE FOUND THE BEST MOBILE APP DEVELOPMENT COMPANY</div>
<div class="text-3">If you need the best custom iOS or Android app for your brand, you have found the right fit! ShellCode Solutions will do that for you.</div>
<a href="#teams">Book a Consultant</a>
</div>
<div class=" left">
<img src="assets/images/man.png" alt="1"/>

</div>

</div>

{/* <!-- <div id="particles-js"></div> --> */}
</div>
</section>

{/* <!-- our Projects --> */}

<section class="our">
<div class="max-width">
<div class="text">Our<br/><span>Proje</span>cts</div>
<div class="our-content">

<div class="right">
<div class="box1"></div>
</div>
<div class="left">
<div class="box2"></div>
</div>
</div> 
</div>
</section>

{/* <!-- about section start --> */}
<section class="about" id="">
<div class="max-width" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">

<div class=" right">
<div class="text">Services<br/><span>We</span> Provide</div>
<h3> App Development</h3>
<p>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion for our specialties and a dedication to delivering exceptional results. Each of us brings our unique skill set and love for what we do. Because ultimately, our difference lies in how much we care.<br/>
</p>
</div>
<div class=" left">
<img src="assets/images/1.png" alt="1"/>

</div>
</div>

</div>


{/* <!-- web --> */}

<div class="max-width">

<div class="about-content">

<div class=" left">
<img src="assets/images/1.png" alt="1"/>
</div>
<div class=" right">
{/* <!-- <div class="text">Technologies<span class="typing-2"></span></div> --> */}
<h3> Web Development</h3>
<p>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion for our specialties and a dedication to delivering exceptional results. Each of us brings our unique skill set and love for what we do. Because ultimately, our difference lies in how much we care.<br/>
</p>
</div>
</div>
</div>

{/* <!-- designing --> */}

<div class="max-width">
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">

<div class=" right">

<h3> Designing</h3>
<p>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion for our specialties and a dedication to delivering exceptional results. Each of us brings our unique skill set and love for what we do. Because ultimately, our difference lies in how much we care.<br/>
</p>
</div>
<div class=" left">
<img src="assets/images/1.png" alt="1"/>
</div>
</div>
</div>

{/* <!-- Optimization --> */}

<div class="max-width">
<div class="about-content">
<div class=" left">
<img src="assets/images/1.png" alt="1"/>
</div>
<div class=" right">
<h3>Search Engine <br/> Optimization</h3>
<p>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion for our specialties and a dedication to delivering exceptional results. Each of us brings our unique skill set and love for what we do. Because ultimately, our difference lies in how much we care.<br/>
</p>
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
<i class="fas fa-paint-brush"></i>

<p>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion.</p>
<img src="assets/images/white.png" alt=""/>
<div class="text">John Peter</div>
<h4>Developer, UK, London</h4>
</div>
</div>
<div class="card">
<div class="box">
<i class="fas fa-chart-line"></i>
<p>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion.</p>
<img src="assets/images/white.png" alt=""/>
<div class="text">John Peter</div>
<h4>Developer, UK, London</h4>
</div>
</div>
<div class="card">
<div class="box">
<i class="fas fa-code"></i>
<p>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion.</p>
<img src="assets/images/white.png" alt=""/>
<div class="text">John Peter</div>
<h4>Developer, UK, London</h4>
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
<li><a href="#">Services</a></li>
<li><a href="#">Technology</a></li>
<li><a href="#">Projects</a></li>
<li><a href="#">About Us</a></li>
<li><a href="#">Blog</a></li>
<li><a href="#">Contact Us</a></li>
<li><a href="#">Contact Us</a></li>

</ul>
</div>
</div>
</div>
</div>




{/* <!-- contact --> */}

{/* <!-- contact section start --> */}

<div class="max-width">
<div class="contact-content">
<div class="column left">

<p>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals 
<br/><br/>Our contact details</p>
<p></p>
<div class="head">987654321</div>
<div class="head">abc@gmail.com</div>
<div class="icons">
</div>
</div>
<div class="column right">

<form action="#">
<div class="fields">
<div class="field name">
<input type="text" placeholder="Name" required/>
</div>
<div class="field email">
<input type="text" placeholder="Company" required/>
</div>
</div>
<div class="fields">
<div class="field name">
<input type="text" placeholder="Phone" required/>
</div>
<div class="field email">
<input type="text" placeholder="Email" required/>
</div>
</div>

<div class="field textarea">
<textarea cols="30" rows="10" placeholder="Message.." required></textarea>
</div>
<div class="button-area">
<button type="submit">Send</button>
</div>
</form>
</div>
</div>
</div>

</section>

{/* <!-- contact --> */}

{/* <!-- contact section start --> */}

<footer class="footer">
<div class="container">
<div class="row">
<div class="footer-col">
<a href="/"><img src="assets/images/shellcode.jpg" alt=""/></a>
<ul>
<li><a href="#">About ShellCode</a></li>
<li><a href="#"><br/>Est. Date</a></li>

</ul>
</div>
<div class="footer-col">
<h4>Location</h4>
<ul>
<li><a href="#"></a></li>
</ul>
</div>
<div class="footer-col">
<h4>Explore</h4>
<ul>
<li><a href="#">Services</a></li>
<li><a href="#">Technology</a></li>
<li><a href="#">Projects</a></li>
<li><a href="#">About Us</a></li>
<li><a href="#">Blog</a></li>
<li><a href="#">Contact Us</a></li>
</ul>
</div>
<div class="footer-col">
<h4>Follow Us</h4>
<ul>
<li><a href="#">Instagram</a></li>
<li><a href="#">Linkediin</a></li>
<li><a href="#">Twitter</a></li>
<li><a href="#">Facebook</a></li>
</ul>
</div>
</div>
</div>

</footer>
{/* <script type="text/javascript" src="particles.js"></script>
<script type="text/javascript" src="app1.js"></script> */}
{/* <script src="/assets/script.js"></script> */}
</div>
</>

);
}




// const TestiMonialsDetails = ({testiMonialDetail}) => {
//     const {name, address, description, img} = testiMonialDetail;
//     console.log("testiMonialDetail"+testiMonialDetail)
//     return (
//         <div class="item">
//             <div class="shadow-effect">
//                 <img class="img-circle" src={img} />
//                 <p>{description}</p>
//             </div>
//             <div class="testimonial-name">
//                 <h5>{name}</h5>
//                 <small>{address}</small>
//             </div>
//         </div>
//     );
// };


export default Home;
