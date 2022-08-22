
import './App.css';
import Header from "./Components/Header"
import Navbar1 from "./Components/Navbar"
import SocialImages from "./Components/SocialImages"
import InformationBox from "./Components/InformationBox"
import MainBody from "./Components/MainBody"
import Cards from "./Components/Cards"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar1/>
      <Header/>
      <SocialImages/>
      <InformationBox/>
      <MainBody/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
