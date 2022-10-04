import React from "react";
import { Route, Routes } from "react-router-dom";
import Page1 from "../Form-pages/Page1";
import Page2 from "../Form-pages/Page2";
import Page3 from "../Form-pages/Page3";
import Page4 from "../Form-pages/Page4";

const AllRoutes = ({ setStep }) => {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Page1 setStep={{ setStep }} />}></Route>
        <Route
          path={"/page2"}
          element={<Page2 setStep={{ setStep }} />}
        ></Route>
        <Route
          path={"/page3"}
          element={<Page3 setStep={{ setStep }} />}
        ></Route>
        <Route
          path={"/page4"}
          element={<Page4 setStep={{ setStep }} />}
        ></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
