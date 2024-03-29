import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import "./styles/fonts/Font.css";
import Modal from "react-modal";
const root = ReactDOM.createRoot(document.getElementById("root"));
Modal.setAppElement("#root"); // 또는 원하는 루트 엘리먼트 선택자를 사용

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
