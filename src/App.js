
import { useState } from 'react';
import './App.css';

import Main from './components/nav/Main';
import { UserContext } from './components/UserContext';

function App() {
  const [quantity, setQuantity] = useState(0);
  
  return (
    <div className="App">
      <UserContext.Provider value={{quantity, setQuantity}}>
    <Main/>
    </UserContext.Provider>
    </div>
  );
}

export default App;
