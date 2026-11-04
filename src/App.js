import { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import { MotionConfig } from "framer-motion";
import store from "./redux/store";
import "./App.css";
import { I18nProvider, useI18n } from "./context/I18nContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Expertise from "./components/Expertise";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BackToTop } from "./components/ui/ScrollExtras";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ThemeRoot({ children }) {
  const isDarkMode = useSelector((s) => s.theme.isDarkMode);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [isDarkMode]);

  return children;
}

function MetaTitle() {
  const { t } = useI18n();
  useEffect(() => {
    document.title = t("meta.title");
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t("meta.description"));
  }, [t]);
  return null;
}

function AppShell() {
  return (
    <MotionConfig reducedMotion="user">
    <ThemeRoot>
      <MetaTitle />
      <ToastContainer
        position="top-center"
        theme="colored"
        autoClose={2800}
        hideProgressBar
      />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Expertise />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </ThemeRoot>
    </MotionConfig>
  );
}

function App() {
  return (
    <Provider store={store}>
      <I18nProvider>
        <AppShell />
      </I18nProvider>
    </Provider>
  );
}

export default App;
