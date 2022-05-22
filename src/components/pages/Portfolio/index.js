import React from "react";
import Project from "../../Project";
import "../../transparent.css";

function Portfolio() {

  const projectsArr = [

    {
      name: "Marvel Hero-Finder",
      imgSrc: process.env.PUBLIC_URL + "/assets/images/marvel.jpg",
      deployedHref: "https://anzelcapparelli.github.io/marvelHeroFinder/",
      desc: [
        "The project primarily focused on integrating APIs into a mobile-responsive site.",
        "Search the Marvel API database for superheroes, which will return media on that hero. Directed and paced team, created HTML and incorporated Bulma components and framework. Increased GIF grab quality and resolved UI styling bugs.",
        "Technologies: HTML5, CSS, JavaScript, jQuery, jQuery UI, Chart.js, Marvel API, Superhero API, GIPHY API, local storage"
      ],
      githubHref: "https://github.com/anzelcapparelli/marvelHeroFinder/"
    },

    {
      name: "The Brew Budz",
      imgSrc: process.env.PUBLIC_URL + "/assets/images/bb-landing.jpg",
      deployedHref: "https://thebrewbudz.herokuapp.com/landing",
      desc: [
        "Full-Stack application that included database storage of information, and user-saved results",
        "Created database models, and most JavaScript-database API coding. Was also a go-to for coding issues.",
        "Technologies: JavaScript, Express Handlebars, Passport.js, Sequelize, MySQL"
      ],
      githubHref: "https://github.com/Guled06/the-brew-budz"
    },

    {
      name: "Eat-Da-Burger!",
      imgSrc: process.env.PUBLIC_URL + "/assets/images/burgerLaunch.jpg",
      deployedHref: "https://immense-everglades-88150.herokuapp.com/",
      desc: [
        "Full-stack app that allows addition of new burgers to eat, and tracks those eaten",
        "Used MySQL to store both burgers to eat and burgers eaten, and used ORM to compartmentalize MySQL queries into one file",
        "Technologies: HTML5, CSS, JavaScript, MySQL, ORM, Express Handlebars",
      ],
      githubHref: "https://github.com/anzelcapparelli/burger"
    },

    {
      name: "Google Books",
      imgSrc: process.env.PUBLIC_URL + "/assets/images/googleBooks.jpg",
      deployedHref: "https://google-books379009.herokuapp.com/",
    desc: [
    "Full-Stack MERN application that stores favorite book searches, and allows removal from saved list",
    "Used Google Books API for data and utilized prop-drilling in the React Components",
    "Technologies: HTML5, CSS, JavaScript, MERN, Mongoose, React-Bootstrap",
    ],
      githubHref: "https://github.com/anzelcapparelli/google_books_search"
    },

    // {
    //   name: ,
    //   imgSrc: ,
    //   deployedHref: ,
    // desc: [
    // "",
    // "",
    // "",
    // ],
    //   githubHref:
    // },

    // {
    //   name: ,
    //   imgSrc: ,
    //   deployedHref: ,
    // desc: [
    // "",
    // "",
    // "",
    // ],
    //   githubHref:
    // },
  ]

  return (
    <div>

      {projectsArr.map(projArrRow =>
        <Project {...projArrRow} key={projArrRow.name} />
      )}

    </div>
  );
}

export default Portfolio;
