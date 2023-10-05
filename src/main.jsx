import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
// import router from './Routes/Routes.jsx'
import AuthProvider from './Provider/AuthProvider';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import ThemeProvider from './Provider/ThemeProvider'
import router from './Routes/Routes';

const queryClient = new QueryClient();



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
            <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>

      </QueryClientProvider>

    </AuthProvider>
    {/* <h1>Hello</h1> */}

  </React.StrictMode>,
)
