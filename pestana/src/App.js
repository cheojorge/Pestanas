import { useState } from 'react';
import './App.css';
import { Tab } from './Components/Tab';
const tabs = [
  'Tab 1','Tab 2','Tab 3','Tab 4'
]

function App() {
  const [actualTab, setActualTab] = useState("Tab 1")
  const changeActualTab = (tab, intro) => {
    setActualTab(tab);
    console.log(intro)
    return (intro.style.backgroundColor = 'red')
  }
  return (
    <div className="App">
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <Tab tabs = {tabs} fun= {changeActualTab}/>
          </ul>
        </div> 
        <div className="card-body">
          <p className="card-text">{actualTab} content is showing here.</p>
        </div>  
      </div> 
      

    </div>
  );
}

export default App;
