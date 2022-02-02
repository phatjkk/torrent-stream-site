import Home from "./Home";
import Watch from "./Watch";
import './App.css';
import {HashRouter,Route,Routes,Link} from "react-router-dom";


function App() {

  return (
    <HashRouter>
    <div className="lg:p-10  bg-zinc-900 bg-cover">
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Watch" element={<Watch />} />
    </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
