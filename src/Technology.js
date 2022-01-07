import React from "react";
import Particles from "react-tsparticles";

// import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect} from "react-router-dom";


const Technology = () => {
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    return <>
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

{/* <nav class="navbar">
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
</nav> */}

<section class="about1" id="">

<div class="max-width" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">

<div class=" right">
<div class="text">Technologies</div>
<h3>An enthusiastic team delivering beautiful results.<br/>
<span>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion for our specialties and a dedication to delivering exceptional results. Each of us brings our unique skill set and love for what we do. Because ultimately, our difference lies in how much we care.
</span>
</h3>
<a href="https://wa.me/+918097355922">Get in Touch</a>
</div>
<div class=" left">
<img src="assets/images/technology.png" alt="1"/>
</div>
</div>

</div>
</section>








<section class="about3" id="">
<h1>Backend</h1>
<div class="max-width2" >
<div class="cardview">
<form>
<div class="about-content">
<div class=" left">
<img src="assets/images/python.png" />
</div>

<div class=" right">
<div class="text">PYTHON</div>
<h3>Hire the best PYTHON Developers in Mumbai<br/>
<span>ShellCode Solutions has the best Python Developers in Mumbai to cater to your needs. Our skilled developers use an object-oriented approach while coding and designing a Python Development Project.<br/>
Coding and Deploying made easy!<br/>
Customizable Python Software<br/>
Client retention and satisfaction<br/>
Ranging across industries<br/>
On-Time Delivery<br/>
</span></h3>
<a href="/python">Learn More</a>

</div>

</div>
</form>
</div>
</div>
</section>




<section class="about3" id="">
<div class="max-width2" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="cardview">
<form>
<div class="about-content">



<div class=" right">
<div class="text">.NET</div>
<h3>Hire the best .NET Developers in Mumbai<br/>
<span>Hire ShellCode Solutions, the best .NET developers in Mumbai, for your software requirements.<br/>
Custom Hiring Models<br/>
On-Time delivery<br/>
Dexterous development methodology<br/>
Source Code Authorization<br/>
</span></h3>
<a href="/.net">Learn More</a>
</div>
<div class=" left">
<img src="assets/images/net.png" alt="1"/>
</div>

</div>
</form>
</div>

</div>
</section>



<section class="about3" id="">
<div class="max-width2" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="cardview">
<form>
<div class="about-content">
<div class=" left">
<img src="assets/images/php.png" alt="1"/>
</div>

<div class=" right">
<div class="text">PHP</div>
<h3>Custom PHP Development by the best PHP Development Company in Mumbai<br/>
<span>We offer high-performance web applications in the form of platform-independent programming that lodges directly into HTML and integrates AJAX and Callback. PHP interfaces easily with Apache or MySQL and provides great flexibility to your development project.<br/>
Custom Hiring Models<br/>
On-Time delivery<br/>
Dexterous development methodology<br/>
Source Code Authorization<br/>
</span></h3>
<div class="javabtn"> 
{/* <a href="#teams">Java </a>
<a href="#teams">Java </a>
<span>
<a href="#teams">Angular</a></span> */}
</div>
<a href="php">Learn More</a>
</div>

</div>
</form>
</div>

</div>
</section>


<section class="about3" id="">
<div class="max-width2" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="cardview">
<form>
<div class="about-content">



<div class=" right">
<div class="text">JAVA</div>
<h3>Hire the best JAVA Developers in Mumbai<br/>
<span>Our highly skilled JAVA developers specialize in integrating JAVA with all kinds of Business websites or software.<br/>
Custom Hiring Models<br/>
On-Time delivery<br/>
Dexterous development methodology<br/>
Source Code Authorization<br/>
</span></h3>
<a href="/java">Learn More</a>
</div>
<div class=" left">
<img src="assets/images/java.png" alt="1"/>
</div>

</div>
</form>
</div>

</div>
</section>


<section class="about3" id="">

<div class="max-width2" >
<div class="cardview">
<form>
<div class="about-content">
<div class=" left">
<img src="assets/images/nodejs.png" alt="1"/>
</div>

<div class=" right">
<div class="text">Node.JS</div>
<h3>Hire the best Node JS Developers in Mumbai<br/>
<span>Our top-notch Node JS developers work hard to give you the best experience by delivering high-quality software.<br/>
Custom Hiring Models<br/>In an ever-growing iOS market, you do not want to be left behind. Hire ShellCode Solutions, the best iOS developers in Mumbai, to cater to your iOS development needs.
On-Time delivery<br/>
Dexterous development methodology<br/>
Source Code Authorization<br/>
</span></h3>
<a href="/nodejs">Learn More</a>
</div>

</div>
</form>
</div>
</div>
</section>

                            {/* Dgital Marketing */}

<section class="about3" id="">
<h1>Front-End</h1>
<div class="max-width2" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="cardview">
<form>
<div class="about-content">
<div class=" left">
<img src="assets/images/react.png" alt="1"/>
</div>

<div class=" right">
<div class="text">React Native</div>
<h3>Hire the best React Native Developers in Mumbai<br/>
<span>Our proficient React Native developers build top-notch applications and websites to establish your brand in the market. Leverage our technology and services and combine them with your idea to give it a new vision.<br/>
Custom Hiring Models<br/>
On-Time delivery<br/>
Dexterous development methodology<br/>
Source Code Authorization<br/>
</span></h3>
<a href="/reactnative">Learn More</a>
</div>

</div>
</form>
</div>
</div>
</section>




<section class="about3" id="">
<div class="max-width2" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="cardview">
<form>
<div class="about-content">



<div class=" right">
<div class="text">Angular</div>
<h3>Hire the best Angular Developers in Mumbai<br/>
<span>ShellCode Solutions, the best Angular developer in Mumbai, offers its top-notch development services to make your life hassle-free and increase your brand’s productivity.<br/>
Custom Hiring Models<br/>
On-Time delivery<br/>
Dexterous development methodology<br/>
Source Code Authorization<br/>
</span></h3>
<a href="/angular">Learn More</a>
</div>
<div class=" left">
<img src="assets/images/angular.png" alt="1"/>
</div>

</div>
</form>
</div>

</div>
</section>



<section class="about3" id="">
<div class="max-width2" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="cardview">
<form>
<div class="about-content">
<div class=" left">
<img src="assets/images/vuejs.png" alt="1"/>
</div>

<div class=" right">
<div class="text">Vue.js</div>
<h3>Hire the best Vue.js Developers in Mumbai<br/>
<span>ShellCode Solutions has a team of the best Vue.js developers in Mumbai at your beck and call.<br/>
Custom Hiring Models<br/>
On-Time delivery<br/>
Dexterous development methodology<br/>
Source Code Authorization<br/>
</span></h3>
<div class="javabtn"> 
{/* <a href="#teams">Java </a>
<a href="#teams">Java </a>
<span>
<a href="#teams">Angular</a></span> */}
</div>
<a href="/vuejs">Learn More</a>
</div>

</div>
</form>
</div>

</div>
</section>


<section class="about3" id="">
<div class="max-width2" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="cardview">
<form>
<div class="about-content">



<div class=" right">
<div class="text">React.js</div>
<h3>Hire the best Reactjs Developers in Mumbai<br/>
<span>Our ReactJS developers offer premium ReactJS services at your doorstep. Boost your enterprise’s growth by hiring ShellCode Solutions, the best ReactJS developers in Mumbai.<br/>
Custom Hiring Models<br/>
On-Time delivery<br/>
Dexterous development methodology<br/>
Source Code Authorization<br/>
</span></h3>
<a href="/reactjs">Learn More</a>
</div>
<div class=" left">
<img src="assets/images/reactjs.png" alt="1"/>
</div>

</div>
</form>
</div>

</div>
</section>


<section class="about3" id="">

<div class="max-width2" >
<div class="cardview">
<form>
<div class="about-content">
<div class=" left">
<img src="assets/images/ios.png" alt="1"/>
</div>

<div class=" right">
<div class="text">iOS</div>
<h3>HHire the best iOS app Developers in Mumbai<br/>
<span>In an ever-growing iOS market, you do not want to be left behind. Hire ShellCode Solutions, the best iOS developers in Mumbai, to cater to your iOS development needs.<br/>
Custom Hiring Models<br/>
On-Time delivery<br/>
Dexterous development methodology<br/>
Source Code Authorization<br/>
</span></h3>
<a href="/ios">Learn More</a>
</div>

</div>
</form>
</div>
</div>
</section>


<section class="about3" id="">
<div class="max-width2" >
<div class="cardview">
<form>
<div class="about-content">
<div class=" right">
<div class="text">Android</div>
<h3>Hire the best Android app Developers in Mumbai<br/>
<span>You do not want to be left behind in a market that has globally established its worth. Hire ShellCode Solutions, the best Android app developers in Mumbai, to cater to your Android development needs.<br/>
Custom Hiring Models<br/>
On-Time delivery<br/>
Dexterous development methodology<br/>
Source Code Authorization<br/>
</span></h3>
<a href="/android">Learn More</a>
</div>
<div class=" left">
<img src="assets/images/android.png" alt="1"/>
</div>

</div>
</form>
</div>

</div>
</section>


<section class="about3" id="">

<div class="max-width2" >
<div class="cardview">
<form>
<div class="about-content">
<div class=" left">
<img src="assets/images/react.png" alt="1"/>
</div>

<div class=" right">
<div class="text">React Native</div>
<h3>Hire the best React Native Developers in Mumbai<br/>
<span>Our proficient React Native developers build top-notch applications and websites to establish your brand in the market. Leverage our technology and services and combine them with your idea to give it a new vision.<br/>
Custom Hiring Models<br/>
On-Time delivery<br/>
Dexterous development methodology<br/>
Source Code Authorization<br/>
</span></h3>
<a href="/reactnative">Learn More</a>
</div>

</div>
</form>
</div>
</div>
</section>


<section class="about3" id="">
<div class="max-width2" >
<div class="cardview">
<form>
<div class="about-content">
<div class=" right">
<div class="text">Flutter</div>
<h3>Hire the best Flutter Developers in Mumbai<br/>
<span>Google’s UI toolkit is something we all want to get our hands on. Hire our best Flutter app developers to avail a rich experience of Flutter App development.<br/>
Custom Hiring Models<br/>
On-Time delivery<br/>
Dexterous development methodology<br/>
Source Code Authorization<br/>
</span></h3>
<a href="flutter">Learn More</a>
</div>
<div class=" left">
<img src="assets/images/flutter.png" alt="1"/>
</div>

</div>
</form>
</div>

</div>
</section>

<section class="about3" id="">

<div class="max-width2" >
<div class="cardview">
<form>
<div class="about-content">
<div class=" left">
<img src="assets/images/xamarin.png" alt="1"/>
</div>

<div class=" right">
<div class="text">Xamarin</div>
<h3>Hire the best Xamarin Developers in Mumbai<br/>
<span>Our efficient Xamarin developers offer you robust services by making use of cutting-edge technology. We exceed your expectations!<br/>
Custom Hiring Models<br/>
On-Time delivery<br/>
Dexterous development methodology<br/>
Source Code Authorization<br/>
</span></h3>
<a href="/xamarin">Learn More</a>
</div>

</div>
</form>
</div>
</div>
</section>

<section class="puma">
<div class ="imagebox">
    <p><span>Trusted by Trusted Brands</span>. We pride ourselves on the relationships we nurture and the consistent results we deliver.</p>
    <img src="assets/images/white.png" alt=""/>
    <img src="assets/images/white.png" alt=""/>
    <img src="assets/images/white.png" alt=""/>
    <img src="assets/images/white.png" alt=""/>
    <img src="assets/images/white.png" alt=""/>
    <img src="assets/images/white.png" alt=""/>
    <img src="assets/images/white.png" alt=""/>
    <img src="assets/images/white.png" alt=""/>
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
<div className="circl">
<a href="/"><img src="assets/images/shellcode.jpg" alt=""/></a>
</div>
<ul>
<li><a href="#"><br/>About ShellCode</a></li>
{/* <li><a href="#"><br/>Est. Date</a></li> */}

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



    </>
}

export default Technology;