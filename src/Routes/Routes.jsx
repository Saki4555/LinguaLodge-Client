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

import ManageUsersUpdated from "../Pages/Dashboard/AdminDashboard/ManageUsersUpdated";
import MangeClasses from "../Pages/Dashboard/AdminDashboard/MangeClasses";
import Payment from "../Pages/Dashboard/StudentDashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/StudentDashboard/PaymentHistory";



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
        {
          path: 'pay',
          element:<Payment></Payment>
        },
        {
          path: 'payhistroy',
          element: <PaymentHistory></PaymentHistory>
        },

        // instructor
        {
          path: 'addclass',
          element: <AddClass></AddClass>
        },
        {
          path: 'myclass',
          element: <MyClass></MyClass>
        },
        
        // admin
      
        {
          path: 'manageclasses',
          element: <MangeClasses></MangeClasses>
        },
        {
          path: 'manageusers',
          element: <ManageUsersUpdated></ManageUsersUpdated>
        }
        
      ]
    }
  ]);

  export default router;