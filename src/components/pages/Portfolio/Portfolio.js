import React from "react";
import Project from "../../Project";
import "../style.css";

function Portfolio() {

  const projectsArr = [
        
    {
      name: "Marvel Hero-Finder",
      imgSrc: process.env.PUBLIC_URL + "/assets/images/marvel.jpg",
      deployedHref: "https://anzelcapparelli.github.io/marvelHeroFinder/",
      githubHref: "https://github.com/anzelcapparelli/marvelHeroFinder/"
    },

    {
      name: "The Brew Budz",
      imgSrc: process.env.PUBLIC_URL + "/assets/images/bb-landing.jpg",
      deployedHref: "https://thebrewbudz.herokuapp.com/landing",
      githubHref: "https://github.com/Guled06/the-brew-budz"
    },
    
    {
      name: "Code Quiz",
      imgSrc: process.env.PUBLIC_URL + "/assets/images/coding_quiz.png",
      deployedHref: "https://anzelcapparelli.github.io/code_quiz/",
      githubHref: "https://github.com/anzelcapparelli/code_quiz"
    },

    {
      name: "Eat-Da-Burger!",
      imgSrc: process.env.PUBLIC_URL + "/assets/images/burgerLaunch.jpg",
      deployedHref: "https://immense-everglades-88150.herokuapp.com/",
      githubHref: "https://github.com/anzelcapparelli/burger"
    }

    // {
    //   name: ,
    //   imgSrc: ,
    //   deployedHref: ,
    //   githubHref:
    // },

    // {
    //   name: ,
    //   imgSrc: ,
    //   deployedHref: ,
    //   githubHref:
    // },

  ]

  const portfolioBackground={
    backgroundColor: 'rgb(30,30,30)',
    backgroundImage: `url(${process.env.PUBLIC_URL+"/assets/images/rockhall.jpg"})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover'
  }

  return (
    <div style={portfolioBackground}>
      <h1>Portfolio Page</h1>

{projectsArr.map(projArrRow => 
      <Project {...projArrRow} key={projArrRow.name} />
  )}

    </div>
  );
}

export default Portfolio;
