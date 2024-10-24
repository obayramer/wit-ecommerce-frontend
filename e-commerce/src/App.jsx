import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import "./App.css";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

function App() {
  const language = "en";
  const data = useSelector((store) => store[language]);

  return (
    <Router>
      <div className="App text-primary overflow-hidden">
        <Switch>
          <Route exact path="/" render={() => <Home data={data} />} />
          <Route path="/about" render={() => <About data={data} />} />
          <Route path="/contact" render={() => <Contact data={data} />} />
          <Route path="/pricing" render={() => <Pricing data={data} />} />
          <Route path="/productlist" render={() => <ProductList data={data} />} />
          <Route path="/productlist/:productID" render={() => <Product data={data} />} />
          <Route path="/team" render={() => <Team data={data} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;