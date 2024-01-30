import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeComponent from "./components/Home ";
import QuizComponent from "./components/Quiz ";
import ResultComponent from "./components/Result"
function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
        <Route path="/game" element={<QuizComponent />}></Route>
        <Route path="/result" element={<ResultComponent />}></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;