
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [tab, setTab] = useState('Tab 1')
  return (
    <div>
        <ul onClick={(e) => setTab(e.target.innerHTML)}>
          <li>Tab 1</li>
          <li>Tab 2</li>
          <li>Tab 3</li>
        </ul>
        <p>This is the content for {tab}</p>
    </div>
  )
}

export default App
