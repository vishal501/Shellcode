// import React, { useEffect } from "react";
import { Tabs, Tab, AppBar, makeStyles } from '@material-ui/core';
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
    
    
    const classes = useStyles()
    const [value,setValue]=React.useState(0)
    const handleChange=(e,val)=>{
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

<div class="about-content">

<div class=" right">
<div class="text">About<br/>ShellCode</div>
<h3>An enthusiastic team delivering beautiful results.<br/>
<span>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion for our specialties and a dedication to delivering exceptional results. Each of us brings our unique skill set and love for what we do. Because ultimately, our difference lies in how much we care.
</span>
</h3>
<a href="https://wa.me/+918097355922">Get in Touch</a>
</div>
<div class=" left">
<img src="assets/images/about.png" alt="1"/>
</div>
</div>
</div>
</section>


            <div class="tab-box">
                <h1>Meet Our Team</h1>
                {/* <AppBar position="static"> */}
                    <Tabs value={value} onChange={handleChange} variant="scrollable"
          scrollButtons="auto" classes={{indicator: classes.customStyleOnActiveTab}}
            aria-label="some text">
              <Tab label={<span className={ value === 0 ? classes.activeTab : classes.customStyleOnTab}>Leadership</span>}/>
                        {/* <Tab label={<span className={ value === 1 ? classes.activeTab : classes.customStyleOnTab}>Accounts</span>}/> */}
                        {/* <Tab label={<span className={ value === 2 ? classes.activeTab : classes.customStyleOnTab}>Creative</span>}/> */}
                        {/* <Tab label={<span className={ value === 3 ? classes.activeTab : classes.customStyleOnTab}>Marketing</span>}/> */}
                        {/* <Tab label={<span className={ value === 4 ? classes.activeTab : classes.customStyleOnTab}>Developers</span>}/> */}
                    </Tabs>
                {/* </AppBar> */}
                <TabPanel value={value} index={0} >
                <div class="tab-sec">
                <div class="image-tab">
                
                <div class="left">
                <img src="assets/images/HarshalAdarkar.jpg" alt=""/>
                <h4>Harshal Adarkar <br/><span>(Founder & Director)</span></h4>
                {/* <a href="#teams">Bio</a> */}
                
                </div>
                
                
                <div class="right">
                
                <img src="assets/images/VitusRodrigo.png" alt=""/>
                
                <h4>Vitus Rodrigo <br/><span>(Co - Founder & Chief <br/>Opertional Officer)</span></h4>
                {/* <a href="#teams">Bio</a> */}
                
                </div>
                
                </div>
                </div>

                </TabPanel>
                <TabPanel value={value} index={1}>
                <div class="tab-sec">
                <div class="image-tab">
                
                <div class="left">
                <img src="assets/images/white.png" alt=""/>
                
                <h4>Shivam <br/>Kumar Verma</h4>
                <a href="#teams">Bio</a>
                
                </div>
                
                
                <div class="right">
                <img src="assets/images/white.png" alt=""/>
                
                <h4>Shivam <br/>Kumar Verma</h4>
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
<img src="assets/images/mission.png" alt="1"/>
</div>

<div class=" right">
<div class="text">Our Mission</div>
<h3>An enthusiastic team delivering beautiful results.<br/>
<span>We at ShellCode Solutions aim to conquer the digital world with our mission. Our mission is to create a digital platform for all businesses. If you are a small and thriving business, we are here for you. Our ambition is to guide you create your digital assets by helping you establish your brand in the digital market.<br/>
</span></h3>
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

<h3><span>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals with a strong passion for our specialties and a dedication to delivering exceptional results.<br/>
</span></h3>
</div>

<div class=" left">
<img src="assets/images/achievements.png" alt="1"/>
</div>



</div>

</div>
</section>






<section class="about2" id="">
<div class="max-width" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">

<div class=" left">
<img src="assets/images/vision.png" alt="1"/>
</div>

<div class=" right">
<div class="text">Our Vision</div>
<h3>An enthusiastic team delivering beautiful results.</h3>
<h3><span>We began this enterprise with a vision to help businesses grow. We aim to accomplish this by creating a digital identity for them. Our developers are dexterous and hard-working and add value to our team. We make use of top-notch technology to assist you in creating your digital presence. By ensuring our clients’ growth, we aim to lead the field of software development and have been inching closer towards our goal.<br/>
</span></h3>
<a href="#teams">Learn More</a>
</div>

</div>

</div>
</section>




<section class="about5" id="">
{/* <div class="max-width" > */}
<h1>Our Projects</h1>
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="about-content">
   

<div class=" left">
<div class="projects-box">
<img src="assets/images/projects/FarmersKart.jpg" alt="1"/>
<h3>Farmers FarmersKart<br/>
<span>Grocery Delivery App</span></h3>
</div>
<div class="projects-box">
<img src="assets/images/projects/DesiiMeat.jpg" alt="1"/>
<h3>Desii Meat <br/>
<span>Food Delivery App</span></h3>
</div>
{/* </div> */}

{/* <div class=" right"> */}
<div class="projects-box">
<img src="assets/images/projects/GOOGLEMEET.jpg" alt="1"/>
<h3>Sabak<br/>
<span>Business meeting App</span></h3>
</div>
<div class="projects-box">
<img src="assets/images/projects/Lagnakariya.jpg" alt="1"/>
<h3>Lagnakariya <br/>
<span>Matrimonial App</span></h3>
</div>
<div class="projects-box">
<img src="assets/images/projects/GreenTiger.jpg" alt="1"/>
<h3>Green Tiger <br/>
<span>Ecommerce Web App</span></h3>
</div>
<div class="projects-box">
<img src="assets/images/projects/company.jpg" alt="1"/>
<h3>Check App <br/>
<span>Employee Managment App</span></h3>
</div>
<div class="projects-box">
<img src="assets/images/projects/Dryclean.jpg" alt="1"/>
<h3>Chiago Dry Cleaners<br/>
<span>Laundry App</span></h3>
</div>
<div class="projects-box">
<img src="assets/images/projects/al.jpg" alt="1"/>
<h3>Al-Hisab <br/>
<span>Community Money Managment App</span></h3>
</div>
<div class="projects-box">
<img src="assets/images/projects/milk.jpg" alt="1"/>
<h3>Dairy App<br/>
<span>Order management App</span></h3>
</div>
<div class="projects-box">
<img src="assets/images/projects/plan.jpg" alt="1"/>
<h3>NRI Nichola <br/>
<span>US Matrimonial App</span></h3>
</div>
<div class="projects-box">
<img src="assets/images/projects/dashboard.jpg" alt="1"/>
<h3>Tutor app <br/>
<span>Elearning App</span></h3>
</div>
<div class="projects-box">
<img src="assets/images/projects/labour.jpg" alt="1"/>
<h3>ServicExpertz<br/>
<span>House Keeping & Personal Services App</span></h3>
</div>
<div class="projects-box1">
<img src="assets/images/projects/Pharma.jpg" alt="1" class="resp"/>
<h3>Bsb Pharma<br/>
<span>Order Managment App</span></h3>
</div>
<div class="projects-box1">
<img src="assets/images/projects/HomeGuru.jpg" alt="1"/>
<h3>Home Guru <br/>
<span>Housekeeping and personal Services Web App</span></h3>
</div>



<div class="projects-box1">
<img src="assets/images/projects/food.jpg" alt="1"/>
<h3>Ulrapi <br/>
<span>Food Delivery App</span></h3>
</div>
<div class="projects-box1">
<img src="assets/images/projects/website.jpg" alt="1"/>
<h3>FOR <br/>
<span>Restaurant Consultancy</span></h3>
</div>
</div>

</div>
<a href="#teams">Learn More</a>
{/* </div> */}
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

<div class="max-width1">
<div class="contact-content">
<div class="column left">

<span>Our team is the driving force of Shellcode. We're a close-knit bunch of talented individuals 
<br/><br/>Our contact details</span>
<div class="head">987654321<br/>abc@gmail.com</div>
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
          
        );

}
const useStyles = makeStyles({
  customStyleOnTab:{
    fontSize:'2.4vmin',
    fontWeight:'500',
    // padding: '0 1vmin',
    color:'black'
  },
  customStyleOnActiveTab:{
    color:'red'
  },
  activeTab:{
    fontSize:'2.6vmin',
    fontWeight:'500',
    color:'red'
  }
})

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

