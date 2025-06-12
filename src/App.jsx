import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/RootLayout/RootLayout";
import Home from "./pages/HomePage/Home";
import CaseStudies from "./pages/CaseStudies/CaseStudies";
import Pricing from "./pages/Pricing/Pricing";
import Services from "./pages/Services/Services";
import AboutUs from "./pages/AboutUs/AboutUs"
import Blog from "./pages/Blog/Blog"
import AllBlogs from "./pages/All Blogs/AllBlogs";

const router = createBrowserRouter([
  {
    path:"/",
    element: <RootLayout/>,
    children:[{
      path: '/',
      element: <Home/>
    },
    {
      path: '/case-studies',
      element: <CaseStudies/>
    },
    {
      path: '/pricing',
      element: <Pricing/>
    },
    {
      path: '/services',
      element: <Services/>
    },
    {
      path: '/aboutUs',
      element: <AboutUs/>
    },
    {
      path: '/blog',
      element: <Blog/>
    },
    {
      path: "/AllBlogs",
      element:<Blog/>
    },
    {
      path: "/ui-ux",
      element:<Blog/>
    },

  ]
  }
])

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
