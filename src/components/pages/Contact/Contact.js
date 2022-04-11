import React from "react";
import "module";
import "./style.css";

function Contact() {

  const contactBackground={
    backgroundImage: `url(${process.env.PUBLIC_URL+"/assets/images/pockmark.jpg"})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  }

  return (
<div style={contactBackground}>
  <div className="row justify-content-center">
    <div className="col ml-2">
      <header>
        <h1>Contact information</h1>
      </header>
      <hr />
    </div>
  </div>
  <div className="row mb-5 mt-5 justify-content-center contactInfo">
    <div className="col-5 justify-content-center" style={{backgroundColor:'red'}}>
      <div className="parentFade">
        <h3 className="mb-0"><span className="fade">Edward</span><span className="shifter"> Anzel Capparelli</span>
        </h3>
        <p className="half-size preferName">Preferred Name</p>
        <p className="half-size fullName">Full Name</p>
      </div>
      <div><strong>Email: </strong><a href="mailto:anzelcapparelli@gmail.com">anzelcapparelli@gmail.com</a></div>
      <div><strong>Phone (text or call): </strong><a href="tel:6199521941">(619) 952-1941</a></div>
      <div className="pb-5"><strong>Resume (PDF): </strong><a href={process.env.PUBLIC_URL + "/assets/images/resume22Feb2021.pdf"} rel="noreferrer" target="_blank">updated Feb 22, 2021</a>
      </div>
    </div>
  </div>
</div>

  );
}

export default Contact;
