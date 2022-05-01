import React from "react";
import "module";
import "../style.css";

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
        <h1 style={{color:'white'}}>Contact information</h1>
      </header>
      <hr />
    </div>
  </div>
  <div className="row mb-5 mt-5 justify-content-center contactInfo">
    <div className="col-5 justify-content-center text-light transparent">
      <div className="parentFade">
        <h3 className="mb-0"><span className="fade">Edward</span><span className="shifter"> Anzel Capparelli</span>
        </h3>
        <p className="half-size preferName">Preferred Name</p>
        <p className="half-size fullName">Full Name</p>
      </div>
      <div><strong>Email: </strong><a href="mailto:anzelcapparelli@gmail.com">anzelcapparelli@gmail.com</a></div>
      <div><strong>Phone (text or call): </strong><a href="tel:6199521941">(619) 952-1941</a></div>
      <div className="pb-5"><strong>Resume (PDF): </strong><a href={process.env.PUBLIC_URL + "/assets/images/eac_resume_01may2022.pdf"} rel="noreferrer" target="_blank">updated May 01, 2022</a>
      </div>
    </div>
  </div>
</div>

  );
}

export default Contact;
