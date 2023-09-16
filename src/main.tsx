import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from './app/store'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { Home } from './page/Home/Home'
import { CurrentEmployees } from './page/CurrentEmployees/CurrentEmployees'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    
  },
  {
    path: "/CurrentEmployees",
    element: <CurrentEmployees/>
  }
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <RouterProvider router={router}/>
    </LocalizationProvider>
 </Provider>
)
