import React from "react";
import { Provider } from "react-redux";
import { appStore } from "./infrastructure/components/store/store";

import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { MemoryRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./app/App";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Router>
        <Provider store={appStore}>
            <App />
        </Provider>
    </Router>
);

reportWebVitals();
