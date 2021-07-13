import React from "react"
import './App.css';
import Header from "./Header"
import Calculate from "./Calculate"

import Total from "./Total"

class App extends React.Component {
  render(){
    return(
      <div className="App">
          <Header/>
          <Calculate/>
        
          <Total/>
      </div>
    )
  }
}
export default App
