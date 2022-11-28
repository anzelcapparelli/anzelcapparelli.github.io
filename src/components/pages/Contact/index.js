import React from "react";
import "module";
import "../../transparent.css";

function Contact() {

  return (
<div className="container">
  <div className="row mt-5 justify-content-center contactInfo">
    <div className="col-5 justify-content-center text-light transparent">
      <div className="parentFade">
        <h3 className="mb-0"><span> Anzel Capparelli</span>
        </h3>
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
