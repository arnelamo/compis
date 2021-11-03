import { BrowserRouter, Route, Switch } from "react-router-dom";
import Campaign from "./components/Campaign";
import Navbar from './components/Navbar'
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";

function App() {
  
  return (
    <BrowserRouter>
    <Campaign />
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
        <CartPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
