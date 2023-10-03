import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
        <div class="container">
            <a href="#intro" class="navbar-brand" id="nav-header">Portfolio</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navmenu">
                <span class="navbar-toggler-icon"/>
            </button>
            <div class="collapse navbar-collapse" id="navmenu">
                <ul class="navbar navbar-nav ms-auto">
                    <li class="nav-item">
                        <a href="#projects" class="nav-link">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a href="#about" class="nav-link">About</a>
                    </li>             
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar