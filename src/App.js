import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    //BEM

    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route path="/checkout" element={<h1>Checkout page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


