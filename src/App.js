import "./App.css";
import Home from "./pages/Home/Home";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header/Header";
import About from "./pages/About/About";

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
    </>
  );
}

export default App;
