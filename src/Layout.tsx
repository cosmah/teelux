import React from 'react'
import Route from './components/routes/Route' // Adjust the import path as necessary

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Route />
      <main>{children}</main>
    </div>
  )
}

export default Layout