import "./App.css";
import Layout from "./Layout";
import Home from "./Home";
import Checkout from "./Checkout";
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
                <Layout>
                  <Home />
                </Layout>
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Layout>
                  <Checkout />
                </Layout>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


