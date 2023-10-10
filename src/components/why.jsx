import React from 'react'

const Why = () => {
  return (
    <div id="why" className="text-dark text-center">
        <div className="container p-5">
            <div className='flex flex-col items-center justify-content-evenly h-screen'>
                <h1 className="text-3xl font-bold mb-4">Which API and Why:</h1>
                <p className="text-lg">
                    I chose the GitHub API for my portfolio project as it made
                    too much sense to pass up. I'm pulling the GitHub repo links
                    with the API and assigning them to their respective project.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Why