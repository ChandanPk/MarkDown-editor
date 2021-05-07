import MarkdownSanitized from './components/MarkdownSanitized'
import './index.css';
import NavBar from './components/Navbar';
import Headers from './components/Headers';
import Footer from './components/Footer';
import InputField from "./components/InputField";
import { InputProvider } from './contexts/inputContext'

function App() {

  return (
    <div className="app">
      <NavBar />
      <Headers />


      <InputProvider>
        <div className="editor">
          <InputField />
          <MarkdownSanitized />
        </div>
      </InputProvider>


      <Footer />

    </div>
  );
}

export default App;
