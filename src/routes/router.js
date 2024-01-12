import { Home } from '../pages/home'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import { LayoutApp } from '../templates/layout'
import { Dashboards } from '../pages/dashboards'

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
    
    <Route path="/" element={<LayoutApp />}>

      <Route
        path="/"
        element={<Home/>}
  
      />
      <Route path="*" element={<div>Not Found</div>} />
    </Route>
  <Route
  path="/ProjetoLeads"
  element={<Dashboards urlDashboard={"https://app.powerbi.com/reportEmbed?reportId=150b2991-44e0-40cb-81ec-2c113f109e8a&autoAuth=true&ctid=952084a7-e64c-4d9a-bc00-e594dad4474b"}/>}

/>
  </>)
)