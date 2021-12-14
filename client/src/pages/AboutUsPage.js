import React from 'react';
import linkedin from '../components/images/linkedin.png';
import github from '../components/images/github.png';
function AboutUsPage(props) {
  return (
    <div className="AboutUsCard col-8 col-md-8 col-lg-8 ">
      
        <div className="card-body card-text">
          <h1><strong>About Us</strong></h1>
          <br></br>
          <h4>Our Motivivation</h4>
          
          <div className="AboutUsInfo">
            <p>Since the beginning of the pandemic, there have not been many activities that friends can participate 
               in safely. Even though restrictions are being lifted, many people are still not comfortable 
               participating in or around group activities. Online games have always been a way for people to
               bond without having to physically interact with each other. Since many people have a phone now it
              is very easy to find free games online that are multiplayer. The issue is you either have to go through
              a complicated login process or download an app that is riddled with ads. Games2Go tries to solve this issue
              by being a platform where users can easily access and play games without the need of registration or ads. </p>
          </div>
          
          <div className="AboutUsDevelopers">

              <h3>Developers</h3>
              <div className="AboutUsDevelopersInfo">
                <div className="Developer 1">
                  <h4>Titus Wen</h4>
                    <div className="AboutUsDevelopersLinks">
                      <a target="_blank"  rel='noreferrer'class = ""  href="https://www.linkedin.com/in/tituswen/">
                          <img src={linkedin} alt="linkedin" width="32" height="32"/> 
                      </a>
                      <a target="_blank"  rel='noreferrer'class = "" href="https://github.com/wen372">
                          <img src={github} alt="github" width="32" height="32"/> 
                      </a>
                    </div>
                </div>
                
                <div className="Developer 2">
                  <h4>Amna Amen</h4>
                    <div className="AboutUsDevelopersLinks">
                        <a target="_blank"  rel='noreferrer'class = ""  href="https://www.linkedin.com/in/amna-amen-a7a920205/">
                            <img src={linkedin} alt="linkedin" width="32" height="32"/> 
                        </a>
                        <a target="_blank"  rel='noreferrer'class = "" href="https://github.com/Amna719">
                            <img src={github} alt="github" width="32" height="32"/> 
                        </a>
                    </div>
                </div>

                <div className="Developer 3">
                  <h4>Place Holder</h4>
                    <div className="AboutUsDevelopersLinks">
                        <a target="_blank"  rel='noreferrer'class = ""  href="./">
                            <img src={linkedin} alt="linkedin" width="32" height="32"/> 
                        </a>
                        <a target="_blank"  rel='noreferrer'class = "" href="./">
                            <img src={github} alt="github" width="32" height="32"/> 
                        </a>
                      </div>
                </div>

              </div>

          </div>





          
        </div>
      
    </div>
  );
}

export default AboutUsPage;