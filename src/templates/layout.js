import { Flex, Layout, theme } from 'antd'
import { Menu } from '../components/menu'
import React from 'react'
import { Outlet } from 'react-router-dom'
import logo from "../imgs/logo.png"

const { Header, Content, Footer } = Layout

export const LayoutApp = () => {
 

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%', height:"70px", background: '#1E4164' }}>
        <div
          style={{
            float: 'right',
            marginTop: '10px',
            display: "flex",
            alignItems: "center"
          }}
        >
            <img src= {logo} style={{width: 200, height: 50}}>
            
            </img>
        </div>

        <Menu/>
      </Header>
      <Content className="site-layout" style={{ padding: '50px 50px' }}>
        <Outlet />
      </Content>
    </Layout>
  )
}