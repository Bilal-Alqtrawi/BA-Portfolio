import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import About from "./components/About";
import Features from "./components/Features";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import { Fragment } from "react";
import DarkModeToggle from "./components/DarkModeTogge";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <ToastContainer />
        <Header component={DarkModeToggle} />
        <Landing />
        <About />
        <Skills />
        <Features />
        <Portfolio />
        <Contact />
        <Footer />
      </Fragment>
    </Provider>
  );
}

export default App;
