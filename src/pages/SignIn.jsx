import React, { useState } from 'react'
import SideBarPage from "../static/SideBarPage.png"
import logo from "../static/logo (1).png"

const SignIn = () => {
    const [saas, selfHosted] = useState("saas");
    const handleToggle = (type) => {
        selfHosted(type);
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 h-screen'>
            {/* Left side */}
            <div className='hidden md:flex md:flex-col justify-center items-center'>
                <img src={SideBarPage} alt="sidebarPage" className='h-screen' />
            </div>

            {/* Right side */}
            <div className='flex flex-col items-center justify-center h-full w-full bg-[#fafafa]'>
                <div className='shadow-md rounded-lg p-8 max-w-md w-full h-auto bg-[#FFFFFF]'>
                    <div className='flex items-center justify-center mb-8'>
                        <img src={logo} alt="CodeAnt AI Logo" className='h-10 mr-2' /> {/* Adjust height as needed */}
                        <h1 className='text-2xl font-sans'>CodeAnt AI</h1>
                    </div>

                    <h1 className='text-2xl font-bold text-center mb-4'>Welcome to CodeAnt AI</h1>

                    <div className='flex items-center justify-center bg-white'>
                        <button
                            className={`flex-grow font-semibold py-2 px-4 rounded-l-lg text-center ${saas === 'saas' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                            onClick={() => handleToggle('saas')}
                        >
                            SAAS
                        </button>
                        <button
                            className={`flex-grow font-semibold py-2 px-4 rounded-r-lg text-center ${saas === 'selfHosted' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                            onClick={() => handleToggle('selfHosted')}
                        >
                            Self Hosted
                        </button>
                    </div>
                    <br />

                    <div className='flex flex-col space-y-2'>
                        {saas === 'saas' ? (
                            <>
                                <button className="px-4 py-2 border flex items-center justify-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-black bg-white hover:bg-black hover:text-white transition duration-150 font-semibold">
                                    <div className="flex items-center">
                                        <img src="https://www.svgrepo.com/show/445786/github.svg" loading="lazy" alt="github logo" className="w-6 h-6" />
                                        <span className="ml-2">Sign in with GitHub</span>
                                    </div>
                                </button>

                                <button className="px-4 py-2 border flex items-center justify-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-black bg-white hover:bg-black hover:text-white transition duration-150 font-semibold">
                                    <div className="flex items-center">
                                        <img src="https://www.svgrepo.com/show/353486/bitbucket.svg" loading="lazy" alt="bitbucket logo" className="w-6 h-6" />
                                        <span className="ml-2">Sign in with Bitbucket</span>
                                    </div>
                                </button>

                                <button className="px-4 py-2 border flex items-center justify-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-black bg-white hover:bg-black hover:text-white transition duration-150 font-semibold">
                                    <div className="flex items-center">
                                        <img src="https://www.svgrepo.com/show/448271/azure-devops.svg" loading="lazy" alt="azure devops logo" className="w-6 h-6" />
                                        <span className="ml-2">Sign in with Azure Devops</span>
                                    </div>
                                </button>
                            </>
                        ) : null}

                        <button className="px-4 py-2 border flex items-center justify-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-black bg-white hover:bg-black hover:text-white transition duration-150 font-semibold">
                            <div className="flex items-center">
                                <img src="https://www.svgrepo.com/show/448226/gitlab.svg" loading="lazy" alt="gitlab logo" className="w-6 h-6" />
                                <span className="ml-2">Sign in with GitLab</span>
                            </div>
                        </button>
                        <button className="px-4 py-2 border flex items-center justify-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-black bg-white hover:bg-black hover:text-white transition duration-150 font-semibold">
                            <div className="flex items-center">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tK0vI4xOn_EvrhDLNnH97lGL4tcot_HmaQ&s" loading="lazy" alt="SSO logo" className="w-6 h-6" />
                                <span className="ml-2">Sign in with SSO</span>
                            </div>
                        </button>
                    </div>
                </div>
                <p className='mt-4 text-gray-600'>By signing up you agree to the <a href="#" className=' font-bold text-black'>Privacy Policy</a>.</p>
            </div>
        </div>
    )
}

export default SignIn
