import React from 'react'
import SidebarLayout from './sideBar/SidebarLayout'
import RepositriesUpload from './uploadRepo/RepositriesUpload'

const Dashboard = () => {
  return (
    <div className='flex flex-col h-screen'>
        <div className='flex-grow flex'>
        <SidebarLayout/>
        <RepositriesUpload/>

        </div>
        
      
    </div>
  )
}

export default Dashboard
