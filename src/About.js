// import React, { useEffect } from "react";
import { Tabs, Tab, AppBar } from '@material-ui/core';
import Particles from "react-tsparticles";
import React from "react";
import ReactDOM from "react-dom";
// import { Component } from "react";
// import Tabs from "./Tabs";
// import Panel from "./Panel";
// import "./About.css";



const About = () => {
    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    const [value,setValue]=React.useState(0)
    const handleTabs=(e,val)=>{
        console.warn(val)
        setValue(val)
    }

      
        
        return (
            <>

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
<div class="max-width" >

<div class="about-content">

<div class=" right">
<div class="text">About<br/>ShellCode</div>
<h3>An enthusiastic team delivering beautiful results.</h3>
<p>ShellCode Solutions is the best Software Development Company in Mumbai, offering scalable IT services across the globe. Our highly skilled developers make efficient use of state-of-the-art technologies and create robust websites and applications. We help small brands carve their path to success and help big brands maintain popularity via digital marketing. Our motto is to make you grow with us, and we aim to achieve it someday.<br/>
</p>
<a href="#teams">Get in Touch</a>
</div>
<div class=" left">
<img src="assets/images/1.png" alt="1"/>
</div>
</div>
</div>
</section>
            <div class="tab-box">
                <h1>Meet Our Team</h1>
                {/* <AppBar position="static"> */}
                    <Tabs value={value} onChange={handleTabs}>
                        <Tab label="Leadership"/>
                        <Tab label="Accounts "/>
                        <Tab label="Creative "/>
                        <Tab label="Marketing "/>
                        <Tab label="Developers "/>
                    </Tabs>
                {/* </AppBar> */}
                <TabPanel value={value} index={0} >
                <div class="tab-sec">
                <div class="image-tab">
                
                <div class="left">
                <img src="assets/images/white.png" alt=""/>
                
                <p>Shivam <br/>Kumar Verma</p>
                <a href="#teams">Bio</a>
                
                </div>
                
                
                <div class="right">
                <img src="assets/images/white.png" alt=""/>
                {/* <div class="image-con"> */}
                <p>Shivam <br/>Kumar Verma</p>
                <a href="#teams">Bio</a>
                
                </div>
                
                </div>
                </div>

                </TabPanel>
                <TabPanel value={value} index={1}>
                <div class="tab-sec">
                <div class="image-tab">
                
                <div class="left">
                <img src="assets/images/white.png" alt=""/>
                
                <p>Accounts <br/>Kumar Verma</p>
                <a href="#teams">Bio</a>
                
                </div>
                
                
                <div class="right">
                <img src="assets/images/white.png" alt=""/>
                {/* <div class="image-con"> */}
                <p>Accounts <br/>Kumar Verma</p>
                <a href="#teams">Bio</a>
                
                </div>
                
                </div>
                </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                <div class="tab-sec">
                <div class="image-tab">
                
                <div class="left">
                <img src="assets/images/white.png" alt=""/>
                
                <p>Creative <br/>Kumar Verma</p>
                <a href="#teams">Bio</a>
                
                </div>
                
                
                <div class="right">
                <img src="assets/images/white.png" alt=""/>
                {/* <div class="image-con"> */}
                <p>Creative <br/>Kumar Verma</p>
                <a href="#teams">Bio</a>
                
                </div>
                
                </div>
                </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                <div class="tab-sec">
                <div class="image-tab">
                
                <div class="left">
                <img src="assets/images/white.png" alt=""/>
                
                <p>Marketing <br/>Kumar Verma</p>
                <a href="#teams">Bio</a>
                
                </div>
                
                
                <div class="right">
                <img src="assets/images/white.png" alt=""/>
                {/* <div class="image-con"> */}
                <p>Marketing <br/>Kumar Verma</p>
                <a href="#teams">Bio</a>
                
                </div>
                
                </div>
                </div>
                </TabPanel>
                <TabPanel value={value} index={4}>
                <div class="tab-sec">
                <div class="image-tab">
                
                <div class="left">
                <img src="assets/images/white.png" alt=""/>
                
                <p>Developers <br/>Kumar Verma</p>
                <a href="#teams">Bio</a>
                
                </div>
                
                
                <div class="right">
                <img src="assets/images/white.png" alt=""/>
                {/* <div class="image-con"> */}
                <p>Developers <br/>Kumar Verma</p>
                <a href="#teams">Bio</a>
                
                </div>
                
                </div>
                </div>
                </TabPanel>
            </div>




<section class="about2" id="">
<div class="max-width" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">

<div class=" left">
<img src="assets/images/1.png" alt="1"/>
</div>

<div class=" right">
<div class="text">Our Mission</div>
<h3>An enthusiastic team delivering beautiful results.</h3>
<p>We at ShellCode Solutions aim to conquer the digital world with our mission. Our mission is to create a digital platform for all businesses. If you are a small and thriving business, we are here for you. Our ambition is to guide you create your digital assets by helping you establish your brand in the digital market.<br/>
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
<div class="text">Our <br/>Achievements</div>

<p>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion for our specialties and a dedication to delivering exceptional results.<br/>
</p>
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
<div class="text">Our Vision</div>
<h3>An enthusiastic team delivering beautiful results.</h3>
<p>We began this enterprise with a vision to help businesses grow. We aim to accomplish this by creating a digital identity for them. Our developers are dexterous and hard-working and add value to our team. We make use of top-notch technology to assist you in creating your digital presence. By ensuring our clients’ growth, we aim to lead the field of software development and have been inching closer towards our goal.<br/>
</p>
<a href="#teams">Learn More</a>
</div>

</div>

</div>
</section>




<section class="about5" id="">
<div class="max-width" >
<h1>Our Projects</h1>
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">
   

<div class=" left">
<img src="assets/images/sample.jpeg" alt="1"/>
<h3>Amount - The Future Of Digital Banking Technology</h3>
<p>Websites & Digital Platforms</p>
<img src="assets/images/sample.jpeg" alt="1"/>
<h3>Amount - The Future Of Digital Banking Technology</h3>
<p>Websites & Digital Platforms</p>

<a href="#teams">Learn More</a>
</div>

<div class=" right">
<img src="assets/images/sample.jpeg" alt="1"/>
<h3>Amount - The Future Of Digital Banking Technology</h3>
<p>Websites & Digital Platforms</p>
<img src="assets/images/sample.jpeg" alt="1"/>
<h3>Amount - The Future Of Digital Banking Technology</h3>
<p>Websites & Digital Platforms</p>


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
          
        );

}

function TabPanel(props){
const {children, value, index}=props;

    return(<div>
        {
            value===index && (
                <h1>{children}</h1>
            )
        }
    </div>)
}
export default About;

