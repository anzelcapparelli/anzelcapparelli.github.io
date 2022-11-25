import React from "react";
import "module";
import "../../transparent.css";

/* ***********************************************************************************************************************
May be a REALLY good example, for cool effect on project description contents coming in, or going out!
*********************************************************************************************************************** */

function Contact() {

  return (
<div className="container">
  <div className="row my-5 justify-content-center contactInfo">
    <div className="col-5 justify-content-center text-light transparent">
      <div className="parentFade">
        <h3 className="mb-0"><span className="fade">Edward</span><span className="shifter"> Anzel Capparelli</span>
        </h3>
        <p className="half-size preferName">Preferred Name</p>
        <p className="half-size fullName">Full Name</p>
      </div>
      <div className="wrapThis"><strong>Email: </strong><a href="mailto:anzelcapparelli@gmail.com" className="wrapThis">anzelcapparelli@gmail.com</a></div>
      <div><strong>Phone (text or call): </strong><a href="tel:6199521941">(619) 952-1941</a></div>
      <div className="pb-5"><strong>Resume (PDF): </strong><a href={process.env.PUBLIC_URL + "/assets/images/eac_resume_01may2022.pdf"} rel="noreferrer" target="_blank">updated May 01, 2022</a>
      </div>
    </div>
  </div>
</div>

  );
}

export default Contact;
