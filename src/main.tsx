import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from './app/store'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { Home } from './page/Home/Home'
import { RootLayout } from './page/RootLayout/RootLayout'
import { CurrentEmployees } from './page/CurrentEmployees/CurrentEmployees'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace/>,
      },
      {
        path: "/home",
        element: <Home/>
      },
      {
        path: "/CurrentEmployees",
        element: <CurrentEmployees/>
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <RouterProvider router={router}/>
    </LocalizationProvider>
 </Provider>
)
