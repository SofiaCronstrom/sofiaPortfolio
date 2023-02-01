
import * as React from "react"
import Header from "./pages/header"
import Contact from './pages/contact';
import First from './pages/first';
import './style/layout.css'

const App = () => {
  
  
  return (
    
   <div className="wrapper-index">
     <Header/>
       <First/>
       <Contact/>
   </div>
  
  )

}

export default App;
