import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import vehicles from './data/vehicles'
import VehicleView from './views/VehicleView'

const routesList = [{
  path: "/",
  element: <App />,
},];

vehicles.forEach((vehicle) => {
  routesList.push({
    path: vehicle.name,
    element: <VehicleView vehicle={vehicle}/>
  });
});


const router = createBrowserRouter(routesList);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
