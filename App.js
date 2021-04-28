import logo from './logo.svg';
import './App.css';
import MyNavbar from '/home/mouna/Bureau/experience/src/components/navbar.js'
import TunisianCities from '/home/mouna/Bureau/experience/src/components/cards1.js'
import Partout from '/home/mouna/Bureau/experience/src/components/cards2.js'
import Card3 from '/home/mouna/Bureau/experience/src/components/card3.js'
import Cards4 from '/home/mouna/Bureau/experience/src/components/cards4.js'
import Footer from '/home/mouna/Bureau/experience/src/components/footer.js'
import Footer2 from '/home/mouna/Bureau/experience/src/components/footer2.js'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     <MyNavbar/>
     <TunisianCities/>
     <Partout/>
     
     <Card3/>
     <Cards4/>
     <Footer/>
     <Footer2/>
    
    </div>
  );
}

export default App;
