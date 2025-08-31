import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/Redux/store";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
     <Provider store={store}>
      <Router basename="/list-coun">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/list-coun" element={<LoginPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;