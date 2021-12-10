import React from "react";
import Particles from "react-tsparticles";

const Service = () => {
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    return <>
 {/* <section class="ourservices" id="">
<div class="max-width">

<div class="our-content">

<div class=" right">
<div class="blogtext">Our<br/>Services</div>

<h3> An enthusiastic team delivering beautiful results.</h3>

<p>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion for our specialties and a dedication to delivering exceptional results. Each of us brings our unique skill set and love for what we do. Because ultimately, our difference lies in how much we care.<br/>
To emote is to express. Everything we do elicits a profound response from our clients, Excitement. Joy. Passion. Wonder. Pride. Satisfaction.</p>
<a href="#teams">Get in Touch</a>
</div>
<div class=" left">
<img src="assets/images/1.png" alt="1"/>
</div>
</div>
</div>
</section> */}

<nav class="navbar">
<div class="max-width">
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

<section class="about1" id="">
<div class="particles">
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
</div>
<div class="max-width" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">

<div class=" right">
<div class="text">Our<br/>Services</div>
<h3>An enthusiastic team delivering beautiful results.</h3>
<p>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion for our specialties and a dedication to delivering exceptional results. Each of us brings our unique skill set and love for what we do. Because ultimately, our difference lies in how much we care.<br/>
</p>
<a href="#teams">Get in Touch</a>
</div>
<div class=" left">
<img src="assets/images/1.png" alt="1"/>
</div>
</div>

</div>
</section>

{/* Dgital Marketing */}

<section class="about2" id="">
<div class="max-width" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">

<div class=" right">
<div class="text">DEVOPS</div>
<h3>THE BEST DEVOPS CONSULTING COMPANY IN MUMBAI</h3>
<p>With our DevOps Consulting Services, construct a strong base for your software development requirements and get the best results. ShellCode Solutions offers DevOps Services to enterprises in need of a multi-functional skill-based team capable of pulling off software development from start to finish.<br/>
</p>
<a href="#teams">Learn More</a>
</div>
<div class=" left">
<img src="assets/images/1.png" alt="1"/>
</div>
</div>

</div>
</section>




<section class="about2" id="">
<div class="max-width" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">

<div class=" left">
<img src="assets/images/1.png" alt="1"/>
</div>

<div class=" right">
<div class="text">MOBILE APP DEVELOPMENT</div>
<h3>We will realize your dream into reality!</h3>
<p>We at ShellCode Solutions, the best Mobile Application Development Company in Mumbai, offer you a world-class experience in the form of the app best suited for your needs. We understand that an app defines your brand and customize your app accordingly.<br/>
Get your dream app!<br/>
We make your hustle hassle-free!<br/>
</p>
<a href="#teams">Learn More</a>
</div>

</div>

</div>
</section>



<section class="about2" id="">
<div class="max-width" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">

<div class=" right">
<div class="text">Website Development</div>
<h3>Best Website Development for your Brand</h3>
<p>ShellCode Solutions, the best Website Development Company in Mumbai, is here for your every need. We create modern and sophisticated websites with engaging UI that keeps your consumers engaged and hooked. Our services come at pocket-friendly prices and are customizable as per your requirements. Ever heard a deal sound so good? Then what are you waiting for?
Get the website your brand deserves!<br/>
We establish you in the online market!<br/>
</p>
<a href="#teams">Learn More</a>
</div>
<div class=" left">
<img src="assets/images/1.png" alt="1"/>
</div>
</div>

</div>
</section>

<section class="about2" id="">
<div class="max-width" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">

<div class=" left">
<img src="assets/images/1.png" alt="1"/>
</div>

<div class=" right">
<div class="text">UX UI</div>
<h3>Get An Efficient UI and UX</h3>
<p>A lousy UI and UX can spell doom for your website. At ShellCode Solutions, the best UI UX developers in Mumbai, we ensure that such is not the case with what we deliver. Be it a user-friendly website or a sophisticated app, an efficient and attractive UI and UX is our priority. We only deliver the best!<br/>

</p>
<a href="#teams">Learn More</a>
</div>

</div>

</div>
</section>


<section class="about2" id="">
<div class="max-width" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">

<div class=" right">
<div class="text">SOCIAL MEDIA MARKETING</div>
<h3>Best social media marketing agency in Mumbai</h3>
<p>You have found for yourself the best social media marketing agency in Mumbai, ShellCode Solutions. Needless to say, now you do not have to pick your head about Social Media Marketing techniques to improve your presence in the digital sphere. ShellCode Solutions will do that for you. Our analysts and planners will create a Marketing plan specifically for your brand and get unbelievable results!<br/>
</p>
<a href="#teams">Learn More</a>
</div>
<div class=" left">
<img src="assets/images/1.png" alt="1"/>
</div>
</div>

</div>
</section>


<section class="about2" id="">
<div class="max-width" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">

<div class=" left">
<img src="assets/images/1.png" alt="1"/>
</div>

<div class=" right">
<div class="text">SEARCH ENGINE OPTIMIZATION</div>
<h3>Best Search Engine Optimization agency in Mumbai</h3>
<p>ShellCode Solutions, the best Search Engine Optimization agency in Mumbai, brings to you its Search Engine Optimization services on a pallet. SEO attracts searchers to your platform via search engine results that are organic and help to increase your brand awareness amongst users. We take over the responsibility for establishing your brand value by employing efficient Search Engine Optimization techniques.<br/>

</p>
<a href="#teams">Learn More</a>
</div>

</div>

</div>
</section>


<section>
<div class="image12">
{/* <div class="box3"></div> */}


<div class="conta"> 
<form action="">
<h2>Why not say hello</h2>
<p>Whatever your challenge, we would love to talk you about it.</p>
    <div class="form group">
    <label for="fname">Name</label><br/>
    <input type="text" class="form-control" required/>
    </div>

    <div class="form group">
    <label for="fname">Company's Name</label><br/>
    <input type="text" class="form-control" required/>
    </div>

    <div class="form group">
    <label for="fname">Email</label><br/>
    <input type="text" class="form-control" required/>
    </div>
   
    <div class="form group">
    <label for="fname">Tell Us How Can We Help</label><br/>
    <textarea class="form-control1"></textarea>
    </div>

    <div class="form group">
    <input type="checkbox" id="terms"/>
    <label for="terms"> Terms and Condtions</label>
    </div>

    <input type="submit" class="btn" value="Submit"/>


</form>
</div>
</div>
</section>



<footer class="footer">
<div class="container">
<div class="row">
<div class="footer-col">
<a href="/"><img src="assets/images/shellcode.jpg" alt=""/></a>
<ul>
<li><a href="#"><br/>About ShellCode</a></li>
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



</>
}

export default Service;