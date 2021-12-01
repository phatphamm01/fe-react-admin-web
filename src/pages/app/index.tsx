import Loading from "@components/Loading";
import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddProductPage from "./AddProduct";
import ProductDetailPage from "./ProductDetail";
import ProductListPage from "./ProductList";

const Dashboard = lazy(() => import(`./Dashboard`));
interface IApp {}

const App: React.FC<IApp> = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product-list" element={<ProductListPage />} />
        <Route path="/product-add" element={<AddProductPage />} />
        <Route path="/product-edit/:id" element={<ProductDetailPage />} />
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
      </Routes>
    </Suspense>
  );
};

export default App;
