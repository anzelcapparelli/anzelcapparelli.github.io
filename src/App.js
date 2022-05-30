import { HashRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Portfolio from "./components/Pages/Portfolio";
import Header from "./components/Header/";
import Footer from "./components/Footer/";
import PageTitle from "./components/PageTitle";

import './App.css';

function App() {

  const bckgrnd = {
    // about: "/assets/images/backgrounds/angelTop.jpg",
    // portfolio: "/assets/images/backgrounds/rockHall.jpg",
    // contact: "/assets/images/backgrounds/pockmark.jpg",
    universal: "/assets/images/backgrounds/forest_n_creek.jpg",
  }

  return (
    <Router>
      <div>
        <Header>
          <NavTabs />
        </Header>
        <div className="bg-white">
          <Route exact path={["/", "/about"]}>
            <div className="pageBackground" style={{backgroundImage: `url(${process.env.PUBLIC_URL + bckgrnd.universal})`}}>
            <PageTitle name="About Me" />
            <About />
            </div>

          </Route>
          <Route exact path="/portfolio">
            <div className="pageBackground" style={{backgroundImage: `url(${process.env.PUBLIC_URL + bckgrnd.universal})`}}>
            <PageTitle name="Portfolio Page" />
            <Portfolio />
            </div>

          </Route>
          <Route exact path="/contact">
            <div className="pageBackground" style={{backgroundImage: `url(${process.env.PUBLIC_URL + bckgrnd.universal})`}}>
            <PageTitle name="Contact Information" />
            <Contact />
            </div>

          </Route>
        </div>
      </div>

      <Footer />

    </Router>
  );
}

export default App;

// Updated portfolio featuring 6 total projects

// Update GitHub profile with pinned repositories featuring those same projects

// Important: Be sure to push your codebase to GitHub and NOT your built and deployed code. Ensure this happens by following the above instructions and using the gh-pages branch to host the deployed application's code.
