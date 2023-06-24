import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { Provider } from "react-redux";
import { store } from "./store/store";
import GlobalStyles from "./assets/styles/global.styles";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <BrowserRouter>
        <GlobalStyles />
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
