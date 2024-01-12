import { ConfigProvider } from 'antd'
import { RouterProvider } from 'react-router-dom'
import { Router } from './routes/router'

function App() {
  return (
    <ConfigProvider>
      <RouterProvider router={Router} />
    </ConfigProvider>
  )
}

export default App