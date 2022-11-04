import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BlankLayout from "../layouts/BlankLayout";
import MainLayout from "../layouts/MainLayout";
import DetailPage from "../pages/DetailPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductPage from "../pages/ProductPage";
import AuthRequire from "./AuthRequired";

function Router() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <AuthRequire>
                        <MainLayout />
                    </AuthRequire>
                }
            >
                <Route path="" element={<HomePage />} >
                    <Route path="/products" element={<ProductPage />} >
                        <Route index element={<div>Please pick book to see information!</div>} />
                        <Route path=":id" element={<DetailPage />} />
                    </Route>

                </Route>

            </Route>

            <Route element={<BlankLayout />}>
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default Router;
