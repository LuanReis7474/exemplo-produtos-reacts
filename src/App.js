import Home from './views/Home'
import About from './views/About';
import Header from './components/Header';
import ProductDetailed from './views/ProductDetailed';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {


  return (
    <div >

      <Router>
        <Header></Header>
        <Routes>
          <Route path="/about" element={<About></About>}>
          </Route>
          <Route path="/" element={<Home></Home>} >
          </Route>
          <Route path="/product/:id" element={<ProductDetailed></ProductDetailed>} >
          </Route>
        </Routes>
      </Router>



    </div>
  );
}

export default App;
