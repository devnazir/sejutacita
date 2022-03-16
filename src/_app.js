import { Routes, Route } from "react-router";

import MainLayout from "layouts/Main.layout";

import Home from "pages";
import CategoryById from "pages/categories/[categoryId]";
import Favourite from "pages/favourite";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="categories/:categoryId" element={<CategoryById />} />
        <Route path="favourite" element={<Favourite />} />
      </Route>
    </Routes>
  );
}

export default App;
