import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../layouts/Dashboard";
import SelectedClassses from "../Pages/Dashboard/StudentDashboard/SelectedClassses";
import AddClass from "../Pages/Dashboard/InstructorDashboard/AddClass";
import MyClass from "../Pages/Dashboard/InstructorDashboard/MyClass";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/classes',
          element: <Classes></Classes>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path:'selectedclasses',
          element: <SelectedClassses></SelectedClassses>
        },

        // instructor
        {
          path: 'addclass',
          element: <AddClass></AddClass>
        },
        {
          path: 'myclass',
          element: <MyClass></MyClass>
        }
      ]
    }
  ]);

  export default router;