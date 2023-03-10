import MainSection from "./MainSection";
import Services from "./Services";
// import Subscriptions from "./Subscriptions";
import PopularClass from "./newVersion/PopularClass";
import Blogs from "./Blogs";
import Comments from "./Comments";
// import { BgImage } from "../../../components";
import Products from "./Products";
import "./index.scss";
import TopicsTaught from "./newVersion/TopicsTaught";
import NewTopic from "./newVersion/NewTopic";
import BestLeader from "./newVersion/BestLeader";

export default function Home() {
  return (
    <div className="Home d-flex flex-column  ">
      <MainSection />
      <PopularClass/>
      
      <TopicsTaught/>
      <NewTopic/>
      <BestLeader/>
      
      {/* <div className="container position-relative d-flex justify-content-between mt-n5">
        <BgImage position="static" type={10} width="175" className="mb-auto" />
        <BgImage position="static" type={7} width="115" className="mt-auto" />
      </div> */}
      {/* <Subscriptions /> */}
      <Products />
      <Services />
      {/* <Blogs /> */}
      {/* <Comments /> */}
    </div>
  );
}
