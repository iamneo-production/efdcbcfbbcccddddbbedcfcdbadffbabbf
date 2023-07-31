import React  from 'react'
import Stopwatch from './components/Stopwatch/stopwatch'
import'./App.css'
 const App=()=>{
   return( 
     <div>
     <Stopwatch/>
     <a className="App-link" href="http://10.40.2.32:8081" target="_blank" rel="noopener noreferrer">Learn React</a>
     </div>
   )
 }
export default App;