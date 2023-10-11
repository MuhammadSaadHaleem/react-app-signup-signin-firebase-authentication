import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import Signup from "../components/Signup";
import Signin from "../components/Signin";
  


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signin/>,
    },

    {
        path: "/signup",
        element: <Signup/>,
      },
  ]);

  function Router (){

    return <RouterProvider router={router} />
  }

  export default Router;