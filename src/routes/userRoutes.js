import Dashboard from "../pages/UsersPanel/Dashboard";
import Exams from "../pages/UsersPanel/Exams";
import Exam from "../pages/UsersPanel/Exam";
import Classes from "../pages/UsersPanel/Classes";
import Class from "../pages/UsersPanel/Class";
// import UserPayments from "../pages/UsersPanel/Payments";
import LeaderBoard from "../pages/UsersPanel/LeaderBoard";
import Products from "../pages/UsersPanel/Products";
import Product from "../pages/UsersPanel/Product";
import Profile from "../pages/UsersPanel/Profile";
import Cart from "../pages/UsersPanel/Cart";

import Registers from "../pages/UsersPanel/Registers";
import FreeTutorials from "../pages/Landing/FreeTutorials";
import FreeTutorialsVideos from "../pages/Landing/FreeTutorials/Videos";
import FreeTutorial from "../pages/Landing/FreeTutorial";
import Blog from "../pages/Landing/Blog";
import BlogDetail from "../pages/Landing/BlogDetail";
import Receipt from "../pages/UsersPanel/Receipt";
import MyNotes from "../pages/UsersPanel/MyNotes";
import MyCourse from "../pages/UsersPanel/MyCourse";

const userRoutes = [
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "registers",
    element: <Registers />,
  },
  {
    path: "classes",
    element: <Classes />,
  },
  {
    path: "mycourse",
    element: <MyCourse />,
  },
  {
    path: "classes/:id",
    element: <Class />,
  },
  {
    path: "exams",
    element: <Exams />,
  },
  {
    path: "exams/:id",
    element: <Exam />,
  },
  {
    path: "mynotes",
    element: <MyNotes />,
  },
  {
    path: "tutorials",
    element: <FreeTutorials />,
  },
  {
    path: "tutorials/:categoryId",
    element: <FreeTutorialsVideos />,
  },
  {
    path: "tutorials/:categoryId/:id",
    element: <FreeTutorial />,
  },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "products/:id",
    element: <Product />,
  },
  {
    path: "blog-list",
    element: <Blog />,
  },
  {
    path: "blog-list/:id",
    element: <BlogDetail />,
  },
  {
    path: "leader-board",
    element: <LeaderBoard />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "receipt",
    element: <Receipt />,
  },
];
export default userRoutes;
