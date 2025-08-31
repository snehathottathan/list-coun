import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/Redux/store";
import LoginPage from "../src/pages/ LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
          <Route path="/coun-list" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
