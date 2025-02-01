import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import ProductByBrand from "./pages/product-by-brand";
import ProductByCategory from "./pages/product-by-category";
import ProductByKeyword from "./pages/product-by-keyword";
import ProductDetails from "./pages/product-details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/by-brand/:id" exact element={<ProductByBrand />} />
        <Route path="/by-category/:id" exact element={<ProductByCategory />} />
        <Route
          path="/by-keyword/:keyword"
          exact
          element={<ProductByKeyword />}
        />
        <Route path="/details/:id" exact element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
