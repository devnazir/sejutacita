import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { Fragment } from "react";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <Fragment>
      <Navbar />
      <main className="mt-[80px]">
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}

export default MainLayout;
