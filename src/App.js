import React,{ useState } from 'react'
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

//Routing
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode ] = useState('light'); //whether dark mode is enabled or not
  const [alert,setAlert ] = useState(null);

  const showAlert = (message,type) =>
  {
    setAlert({
      msg :message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
  }, 1500);
  }
  // const toggleMode = ()=>
  // {
  //   if(mode==='light')
  //   {
  //     setMode('dark')
  //     document.body.style.backgroundColor='#042743';
  //     showAlert("Dark Mode has been enabled", "success");
  //     document.title = 'TextUtils - Light mode';
  //     setInterval(() =>{
  //       document.title = 'TextUtils is Amazing';
  //     },2000);
  //   }
  //   else{
  //     setMode('light')
  //     document.body.style.backgroundColor='white';
  //     showAlert("Light Mode has been enabled", "success");
  //     document.title = 'TextUtils - Dark mode'
      
  //   }
  // }

  // return (
  //   <>
  //   <Router>
  //     <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>  {/* used the created component here and then it automatically gets imported above. */}
  //     <Alert alert={alert} />
  //     <div className="container my-3">
  //     <Routes>
  //         <Route path="/about" element={<About mode={mode} toggleMode={toggleMode}/>}/>
  //           <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyse" mode={mode} toggleMode={toggleMode}/>} />
  //       </Routes>
      
  //         {/* <TextForm showAlert={showAlert} heading="Enter the text to Analyse" mode={mode} toggleMode={toggleMode}/> 
  //         <About /> */}
  //       </div>
  //     </Router>
  //   </>
  //   );
  // }


//COLOUR PALLETTE -->
const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
}
  const toggleMode = (cls)=>
  {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled", "success");
    }
  }

  return (
  <>
  <Router>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>  {/* used the created component here and then it automatically gets imported above. */}
    <Alert alert={alert} />
    <div className="container my-3">
    <Routes>
        <Route path="/about" element={<About mode={mode} toggleMode={toggleMode}/>}/>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyse" mode={mode} toggleMode={toggleMode}/>} />
      </Routes>
    
        {/* <TextForm showAlert={showAlert} heading="Enter the text to Analyse" mode={mode} toggleMode={toggleMode}/> 
        <About /> */}
      </div>
    </Router>
  </>
  );
}

export default App;
