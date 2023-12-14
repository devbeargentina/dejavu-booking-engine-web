import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
 import "./index.css";
import "./custom.less";
import "./assets/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/style.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./redux/store"
serviceWorker.unregister();

if (process.env.NODE_ENV === "developmentdasda") {
  window.setInterval(() => {
      document.querySelectorAll('iframe').forEach(elem => {
          if (elem.attributes["src"] === undefined || !elem.attributes["src"].value.startsWith("https://www.google.com/recaptcha/api2/")) {
              elem.parentNode.removeChild(elem);
          }
      });
  }, 3000);
}
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
document.getElementById("root")
);
