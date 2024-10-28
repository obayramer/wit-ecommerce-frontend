import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import "./App.css";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import useLocalStorage from "./hooks/useLocalStorage";
import axiosAuth from "./api/axiosAuth";
import { setUserSuccess } from "./store/actions/userActions";

function App() {
  const language = "en";
  const data = useSelector((store) => store.data[language]);
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const [token, setToken] = useLocalStorage("token", "");

  useEffect(() => {
    if (token) {
      axiosAuth()
        .get("/verify")
        .then((response) => {
          dispatch(setUserSuccess(response.data));
          user.length && setToken(user.token);
        })
        .catch((error) => {
          localStorage.removeItem("token");
        });
    }
  }, []);

  return (
    <div className="App min-h-screen text-primary overflow-hidden">
      <Switch>
        <Route exact path="/">
          <Home data={data} />
        </Route>
        <Route path="/about">
          <About data={data} />
        </Route>
        <Route path="/contact">
          <Contact data={data} />
        </Route>
        <Route path="/login">
          <LogIn data={data} />
        </Route>
        <Route path="/pricing">
          <Pricing data={data} />
        </Route>
        <Route path="/productlist">
          <ProductList data={data} />
        </Route>
        <Route path="/productlist/:productID">
          <Product data={data} />
        </Route>
        <Route path="/signup">
          <SignUp data={data} />
        </Route>
        <Route path="/team">
          <Team data={data} />
        </Route>
      </Switch>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
export default App;