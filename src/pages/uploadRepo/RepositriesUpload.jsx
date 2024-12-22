import React from 'react'
import {HeaderSection} from "./Header"
import SearchBox from './SearchBox'
import { RepositoryList } from './RepoList'
const RepositriesUpload = () => {
  return (
    <div className=' bg-[#fafafa] border border-gray-300 rounded-lg p-6 m-4 w-4/5 mx-auto shadow-md h-screen w-full overflow-auto'>
        <div className=''>
        {/* <HeaderSection/> */}
        <RepositoryList/>
        </div>
    </div>
  )
}

export default RepositriesUpload
