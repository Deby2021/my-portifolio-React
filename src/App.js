import "./App.css";
import Home from "./pages/Home/Home";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header/Header";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import ContactForm from "./pages/ContactForm/ContactFomr";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header
        home={`Página Inical`}
        about={`Sobre mim`}
        skills={`Habilidades`}
        project={`Projetos`}
        contact={`Contato`}
      />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
