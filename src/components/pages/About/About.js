import React from "react";
import "./style.css";
import "../style.css";

// for neater look, make a variable containing desired styles, then set styles to vars

function About() {

  const aboutBackground = {
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/images/angelTop.jpg"})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  }

  return (
    <div style={aboutBackground}>
      {/* ^^^ add image to above div! */}
      <div className="container p-3 mb-2 text-light transparent">
        {/* above div is the background to the text! Bootstrap is overriding */}
        <div className="row justify-content-start">
          <div className="col-md-12 mt-5">
            <header>
              <h1>About Me</h1>
            </header>
            <hr />
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-md-3">
            {/* <img src="./assets/images/mosaicV2_200x200.jpg" className="img-fluid" alt="Mosaic of Anzel" /> */}
            <img src={process.env.PUBLIC_URL + "/assets/images/mosaicV2_200x200.jpg"} className="img-fluid" alt="Mosaic of Anzel" />
          </div>
          <div className="col-md-9">
            <blockquote className="blockquote">
              <p className="mb-0">"Give me courageous over fearless. Those with courage temper the worth of their goals through pursuing them over their fears. 
              Those without fear may lack that conviction and fall from the first instance of it."</p>
            </blockquote>
          </div>
        </div>
        <div className="row justify-content-start mt-3 ml-2 mr-2">
          <p>
            I graduated from UC Santa Barbara with a bachelors degree in Biology late 2018, but did not truly
            know where to go from there, and lacked the practical experience necessary to get started in the
            field. After a year of interning at UCSD Moore's Cancer Center, I began to further explore
            other interests that had piqued in my undergraduate classes, in hopes of finding something I was
            passionate about.
          </p>
          <p>
            Coding is a skill that combines my passion for mathematics and my systematic approach to learning.
            With coding, I find that my natural tendencies to focus on all details thrives, as the demanding
            nature of coding syntax and the completeness of instructions needed to perform tasks both require
            this trait. Add in the satisfaction of getting a file to work as intended and the appeal of making
            apps on the web, where they can be widely used, viewed, and appreciated, and my desire to be a web
            designer, although new, has been the strongest motivation that I have had in half a decade. I know
            I'm up against those who have more coding experience than me, but I have the courage to go for it
            anyways. After all, everyone has to start somewhere, and my dedication to keep learning and to grow
            in areas other than strictly coding will lead me into becoming what I believe will be a succesful
            web developer.
          </p>
        </div>
      </div>
    </div>

  );
}

export default About;
