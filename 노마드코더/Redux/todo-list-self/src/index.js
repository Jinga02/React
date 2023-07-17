import React from "react";
import { ReactDom } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

// const index = () => {
//   return (

//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
export default index;
