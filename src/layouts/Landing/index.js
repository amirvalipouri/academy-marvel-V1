import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import "./index.scss";
export default function Landing() {
  return (
    <div className="Landing w-100 ">
      <Header />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
