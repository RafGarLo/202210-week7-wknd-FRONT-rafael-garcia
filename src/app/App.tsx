import React from "react";
import { Layout } from "../infrastructure/components/layout/layout";
import { AppRoutes } from "../infrastructure/router/app.routes";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Layout>
                <AppRoutes></AppRoutes>
            </Layout>
        </div>
    );
}

export default App;
