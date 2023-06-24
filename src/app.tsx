import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import ViewProduct from "./pages/ViewProduct";

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='view/:id' element={<ViewProduct />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    );
}

export default App;
