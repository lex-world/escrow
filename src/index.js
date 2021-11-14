import React from "react";
import "./style.scss";
import ReactDOM from "react-dom";
import App from "./App.jsx";

/**
 * @context custom react context api
 */
import ActiveTabDataLayer from "./Context/ActiveNavbarTab";

ReactDOM.render(
    <ActiveTabDataLayer>
      <App />
    </ActiveTabDataLayer>,
  document.getElementById("root")
);
