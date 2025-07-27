import { Route, Routes } from "react-router-dom";
import BubbleSortPage from "../pages/BubbleSortPage";
import Home from "../pages/Home";
import MergeSortPage from "../pages/MergeSortPage";
import QuickSortPage from "../pages/QuickSortPage";
import SelectionSortPage from "../pages/SelectionSortPage";
import InsertionSortPage from "../pages/InsertionSortPage";
import HeapSortPage from "../pages/HeapSortPage";
import AlgorithmAnalyzer from "../pages/AlgorithmAnalyzer";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="SelectionSort" element={<SelectionSortPage />} />
      <Route path="InsertionSort" element={<InsertionSortPage />} />
      <Route path="/QuickSort" element={<QuickSortPage />} />
      <Route path="/BubbleSort" element={<BubbleSortPage />} />
      <Route path="/MergeSort" element={<MergeSortPage />} />
      <Route path="/HeapSort" element={<HeapSortPage />} />
      <Route path="/AlgorithmAnalyzer" element={<AlgorithmAnalyzer />} />
    </Routes>
  );
};

export default AppRoutes;
