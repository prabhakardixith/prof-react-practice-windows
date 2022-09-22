import "./App.css";
import { useEffect } from "react";

import FocusInput from "./hooks/useRefo/FocusInput";
import HookTimer from "./hooks/useRefo/HookTimer";

const App = () => {

  useEffect(() => {
    document.title = 'Practice React'
    return () => {
      console.log('ditached app component');
    }
  }, [])
  
  return (
    <div className="App">
     
     {/* <FocusInput/> */}
     {/* <HookTimer/> */}
    </div>
  );
};

export default App;
