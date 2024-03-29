import './App.css';
import Header from './components/Header';
// import Footer from './components/Footer';
// import SignUp from './components/SignUp';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import PrivateComponent from './components/PrivateComponent';
// import Login from './components/Login';
// import AddProduct from './components/AddProduct';
// import ProductList from './components/ProductList';
import Courses from "./components/Courses";
import FoundationOneneet from './components/FoundationOneneet';
import FoundationTwoneet from './components/FoundationTwoneet';
import TargetCourseneet from './components/TargetCourseneet';
import Home from './components/Home';
import AboutAayam from './components/AboutAayam';
import JourneyOfAayam from './components/JourneyOfAayam';
import OurMission from './components/OurMission';
import OurVision from './components/OurVision';
import Awards from './components/Awards';
import Directors from './components/Directors';
import Faculty from './components/Faculty';
import WhyAayam from './components/WhyAayam';
import RegistrationForm from './components/RegistrationForm';
import AboutNeetUg from './components/AboutNeetUg';
import AboutJeeAdvance from './components/AboutJeeAdvance';
import AboutJeeMains from './components/AboutJeeMains';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
      
      {/* <Route path="/" element={<Home/>}/> */}
      <Route  path="/" element={<Home/>}/>
      <Route exact path="/courses" element={<Courses/>}/>
      <Route exact path="/foundationoneneet" element={<FoundationOneneet/>}/>
      <Route exact path="/foundationtwoneet" element={<FoundationTwoneet/>}/>
      <Route exact path="/targetcourseneet" element={<TargetCourseneet/>}/>
      <Route exact path="/aboutaayam" element={<AboutAayam/>}/>
      <Route exact path="/journeyofaayam" element={<JourneyOfAayam/>}/>
      <Route exact path="/ourmission" element={<OurMission/>}/>
      <Route exact path="/ourvision" element={<OurVision/>}/>
      <Route exact path="/awards" element={<Awards/>}/>
      <Route exact path="/directors" element={<Directors/>}/>
      <Route exact path="/faculty" element={<Faculty/>}/>
      <Route exact path="/whyaayam" element={<WhyAayam/>}/>
      <Route exact path="/registrationform" element={<RegistrationForm/>}/>
      <Route exact path="/neetug" element={<AboutNeetUg/>}/>
      <Route exact path="/jeemains" element={<AboutJeeMains/>}/>
      <Route exact path="/jeeadvance" element={<AboutJeeAdvance/>}/>



      {/* <Route path="/update" element={<h1>Update Product Component</h1>}/>
      <Route path="/logout" element={<h1>Logout</h1>}/>
      <Route path="/profile" element={<h1>Profile Product Component</h1>}/>
      </Route>
      
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/> */}
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
