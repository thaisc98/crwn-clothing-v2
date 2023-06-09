import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import { Routes, Route } from "react-router-dom";
import Category from "../category/category.component";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.util";
import { setCategoriesMap } from "../../store/categories/categories.action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />}></Route>
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
