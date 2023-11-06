import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CustomHook from "./components/CustomHook";
import UseCallBack from "./components/UseCallBack";
import UseContext from "./components/UseContext";
import UseEffect from "./components/UseEffect";
import UseMemo from "./components/UseMemo";
import UseRef from "./components/UseRef";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}>
          <Route path="/use-effect" Component={UseEffect} />
          <Route path="/use-context" Component={UseContext} />
          <Route path="/use-callback" Component={UseCallBack} />
          <Route path="/use-memo" Component={UseMemo} />
          <Route path="/use-ref" Component={UseRef} />
          <Route path="/custom-hook" Component={CustomHook} />
          <Route path="*" Component={PageNotFound} />
        </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
