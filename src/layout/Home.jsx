import React from "react";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import RIghtNav from "../components/layout-component/RIghtNav";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-poppins">
      <Header />
      <section className="w-11/12 mx-auto">
        <LatestNews />
      </section>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar />
      </nav>

      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-4">
        <aside className="left col-span-3">
          <LeftNavbar />
        </aside>
        <section className="col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RIghtNav />
        </aside>
      </main>
      {/* <Navbar /> */}
    </div>
  );
};

export default Home;
