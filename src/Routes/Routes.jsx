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
import EnrolledClasses from "../Pages/Dashboard/StudentDashboard/EnrolledClasses";
import Instructors from "../Pages/Instructors/Instructors";
import ErrorElement from "../Pages/ErrorElement";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorElement></ErrorElement>,
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
        },
        {
          path: '/instructors',
          element: <Instructors></Instructors>
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
          path: 'enrolled',
          element: <EnrolledClasses></EnrolledClasses>
        },
        {
          path: 'pay/:id',
          element:<Payment></Payment>,
          loader: ({ params }) => fetch(`https://assignment-12-server-gold.vercel.app/payselected/${params.id}`)
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