import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
// import RootLayout from "./pages/RootLayout/RootLayout";
// import Home from "./pages/HomePage/Home";
// import CaseStudies from "./pages/CaseStudies/CaseStudies";
// import Pricing from "./pages/Pricing/Pricing";
// import Services from "./pages/Services/Services";
// import AboutUs from "./pages/AboutUs/AboutUs"
// import Blog from "./pages/Blog/Blog"
// import AllBlogs from "./pages/All Blogs/AllBlogs";
import { lazy } from "react"
const RootLayout = lazy(() => import("./pages/RootLayout/RootLayout"));
const Home = lazy(() => import("./pages/HomePage/Home"))
const CaseStudies = lazy(() => import("./pages/CaseStudies/CaseStudies"));
const Pricing = lazy(() => import("./pages/Pricing/Pricing"));
const Services = lazy(() => import("./pages/Services/Services"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const Blog = lazy(() => import("./pages/Blog/Blog"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{
      path: '/',
      element: <Home />
    },
    {
      path: '/case-studies',
      element: <CaseStudies />
    },
    {
      path: '/pricing',
      element: <Pricing />
    },
    {
      path: '/services',
      element: <Services />
    },
    {
      path: '/aboutUs',
      element: <AboutUs />
    },
    {
      path: '/blog',
      element: <Blog />
    },
    {
      path: "/AllBlogs",
      element: <Blog />
    },
    {
      path: "/ui-ux",
      element: <Blog />
    },

    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
