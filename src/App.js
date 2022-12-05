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

  const picLoc = "/assets/images/backgrounds/";

  const bckgrnd = {
    // universal: `${picLoc}forest_n_creek.jpg`,
    universalLandscape: `${picLoc}mtn_view.jpg`,
    // ^^^ universalLandscape stock photo by JOHN TOWNER on Unsplash

  }

  /* ================================================================================================
  JOHN TOWNER on Unsplash Credit Links:
  https://unsplash.com/@heytowner?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
  https://unsplash.com/images/nature/landscape?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
  ================================================================================================ */

  return (
    <Router>
      <div>
        <Header>
          <NavTabs />
        </Header>
        <div className="bg-white">
          <Route exact path={["/", "/about"]}>
            <div
              className="pageBackground"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + bckgrnd.universalLandscape})` }}
            >
              <PageTitle name="About Me" />
              <About className="pageContents" />
            </div>

          </Route>
          <Route exact path="/portfolio">
            <div
              className="pageBackground"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + bckgrnd.universalLandscape})` }}
            >
              <PageTitle name="Portfolio Page" />
              <Portfolio className="pageContents" />
            </div>

          </Route>
          <Route exact path="/contact">
            <div
              className="pageBackground"
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL + bckgrnd.universalLandscape})` }}
            >
              <PageTitle name="Contact Information" />
              <Contact className="pageContents" />
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
