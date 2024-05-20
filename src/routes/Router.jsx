import { Routes, Route } from "react-router-dom";
import ROUTES from "./ROUTES.js";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Login from "../pages/Login";
import MakeupTips from "../pages/MakeupTips";
import Register from "../pages/Register";
import Services from "../pages/Services";
import NotFound from "../pages/NotFound.jsx";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route path={ROUTES.CONTACT} element={<Contact />} />
      <Route path={ROUTES.GALLERY} element={<Gallery />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.MAKEUPTIPS} element={<MakeupTips />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />
      <Route path={ROUTES.SERVICES} element={<Services />} />
      {/* <Route path={`${ROUTES.LANDINGPAGE}/:id`} element={<LandingPage />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Router;
