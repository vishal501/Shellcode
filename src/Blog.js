import React from "react";
import Particles from "react-tsparticles";
import { Tabs, Tab, AppBar } from '@material-ui/core';

const Blog = () => {
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
<div class="text">Blog</div>
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



<section class="about6" id="">

<div class="max-width" >
{/* <!-- <h2 class="title">About me</h2> --> */}
<div class="cardview">
<form>
<div class="about-content">
<div class=" left">
<img src="assets/images/sample.jpeg" alt="1"/>
</div>

<div class=" right">
{/* <div class="text">Digital Marketing</div> */}
<p><span>New</span> Other</p>
<h3>Agency Growth Event: Merging Is Not The Only Way</h3>

<a href="#teams">Learn More</a>
</div>

</div>
</form>
</div>
</div>
</section>


<section class="topstories">
{/* <div class ="imagebox">
    <h2>Top Stories</h2> 
</div> */}
<div class="about-content">
<h2>Top Stories</h2>
<div class=" left">
<main>
<div class="imageleft">
<img src="assets/images/sample.jpeg" alt="1"/>
<p>Get To Know Platform Advertising With Criteo</p>
</div>
<div class="imageleft">
<img src="assets/images/sample.jpeg" alt="1"/>
<p>Get To Know Platform Advertising With Criteo</p>
</div>
<div class="imageright">
<form class="img-box">
<p><span>New</span> Other <br/>
Get To Know Platform Advertising With Crite</p>

<img src="assets/images/sample.jpeg" alt="1"/>

</form>
</div>
<div class="imageleft">
<img src="assets/images/sample.jpeg" alt="1"/>
<p>Get To Know Platform Advertising With Criteo</p>
</div>
<div class="imageleft">
<img src="assets/images/sample.jpeg" alt="1"/>
<p>Get To Know Platform Advertising With Criteo</p>
</div>
<div class="imageright">
<form class="img-box">
<p><span>New</span> Other <br/>
Get To Know Platform Advertising With Crite</p>

<img src="assets/images/sample.jpeg" alt="1"/>
</form>
</div>
</main>

</div>

</div>
</section>



<div class="tab-heading">
                <h1>Heading</h1>
                {/* <AppBar position="static"> */}
                    <Tabs value={value} onChange={handleTabs}>
                        <Tab label="All"/>
                        <Tab label="Blog "/>
                        <Tab label="Content marketing "/>
                        <Tab label="Ecommerce "/>
                        <Tab label="Email Marketing "/>
                        <Tab label="Events"/>
                        <Tab label="SEO"/>
                    </Tabs>
                {/* </AppBar> */}
<TabPanel value={value} index={0} >
<div class="row">
<main>
<div class="column">
<img src="assets/images/sample.jpeg" alt="1"/>
<p>Get To Know Platform Advertising With Criteo</p>
</div>
<div class="column">
<img src="assets/images/sample.jpeg" alt="1"/>
<p>Get To Know Platform Advertising With Criteo</p>
</div>
<div class="column">
<img src="assets/images/sample.jpeg" alt="1"/>
<p>Get To Know Platform Advertising With Criteo</p>
</div>
<div class="column">
<img src="assets/images/sample.jpeg" alt="1"/>
<p>Get To Know Platform Advertising With Criteo</p>
</div>
<div class="column">
<img src="assets/images/sample.jpeg" alt="1"/>
<p>Get To Know Platform Advertising With Criteo</p>
</div>
<div class="column">
<img src="assets/images/sample.jpeg" alt="1"/>
<p>Get To Know Platform Advertising With Criteo</p>
</div>

<div class="column">
<img src="assets/images/sample.jpeg" alt="1"/>
<p>Get To Know Platform Advertising With Criteo</p>
</div>
<div class="column">
<img src="assets/images/sample.jpeg" alt="1"/>
<p>Get To Know Platform Advertising With Criteo</p>
</div>

</main>

</div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                <div class="tabques">
                <h2>10 questions to ask before hiring a Mobile App Development Company</h2>
                <p>How do you find the one? No, we are not talking about romance here. Although, finding the correct mobile app developers for your mobile application development needs can be even more difficult than finding the love of your life. Why? Here are certain questions you should be asking your mobile app developers and certain answers they should be providing. </p>
                <h3>1. Sharing portfolio</h3>
                <p>Mobile app development can take a good amount of time before the product gets delivered to your doorstep. Ask them how much time their process generally takes. Usually, it takes three to four months to launch a mobile app after proper testing. If they are delivering within weeks, it's not a great sign!</p>
                <h3>2. Ask them for their time</h3>
                <p>We at ShellCode Solutions do not forget to provide information about the development process we undertake. We believe that a scalable and robust designing process goes a long way and builds long-lasting relations. Do not forget to ask the person you hire about the development model they are using. This will give you an idea about the kind of process you really want and whether they are the right fit for you.</p>
                <h3>3. Ask them about their development model</h3>
                <p>ShellCode Solutions, the best Mobile app development company in Mumbai, combines state-of-the-art technology with meticulous employees who deliver on time. The first and foremost question you should be asking your mobile app developers is the kind of process and tools they are using so that you can find the right match!</p>
                <h3>4. Ask them about the tools and technologies they use</h3>
                <p>Frameworks like React Native, Xamarin, etc are a huge help when it comes to mobile app development. ShellCode Solutions makes use of Framework technology to deliver the best mobile applications you will ever see. This is something you want to know about your mobile app developers.</p>
                <h3>5. Find out if they can get their hands on Framework</h3>
                <p>Frameworks like React Native, Xamarin, etc are a huge help when it comes to mobile app development. ShellCode Solutions makes use of Framework technology to deliver the best mobile applications you will ever see. This is something you want to know about your mobile app developers.</p>
                <h3>6. Choosing the right platform</h3>
                <p>Knowing whether you want an Android app or an iOS one can be a hard task. It depends on what you want with your application in the long run. Cross-platform app development is preferable in case you have a huge budget. Our advice? Hire ShellCode Solutions and go for a single platform before you venture into cross-platform app development.</p>
                <h3>7. Ask them about launch and Deployment</h3>
                <p>Believe it or not, not all mobile app developers publish your app in the play store. Launching and deployment after proper testing is an essential part of mobile app development and ShellCode Solutions does that with great effBelieve it or not, not all mobile app developers publish your app in the play store. Launching and deployment after proper testing is an essential part of mobile app development and ShellCode Solutions does that with great efficiency. So what are you waiting for?iciency. So what are you waiting for?</p>
                <h3>8. Maintenance is important. So is marketing!</h3>
                <p>After you have got your hands on your app, their work isn't over. Maintenance and support are an essential part of the development process, and not many developers provide them. ShellCode Solutions is available anywhere, any time. We also offer to market your app on social media platforms and carry out marketing campaigns for you!</p>
                <h3>9. Ask for updates</h3>
                <p>Believe it or not, it is your developer's responsibility to keep you updated and in the loop! ShellCode Solutions ensures a transparent process so that you are updated, always. Ensure that you are the sole owner of your code and the code is secure.</p>
                <h3>10. Don't forget the paperwork!</h3>
                <p>Agreements and paperwork is the most important aspect of your relationship. Ask them about the papers both parties will sign. Usually, a non-disclosure agreement is involved so that both parties maintain secrecy. Sign a Service Legal Agreement which ensures an easy exit if your requirements are not met by your developer.</p>

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

export default Blog;