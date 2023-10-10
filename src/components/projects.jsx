import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    // Extract repository names from projectData:
    const repoNames = projectData.map((project) => project.repo);

    // Use Promise.all to fetch data for all repos:
    Promise.all(
      repoNames.map(async (repoName) => {
        const response = await fetch(`https://api.github.com/repos/Alex-Merkel/${repoName}`);
        if (response.status === 200) {
          const repositoryData = await response.json();
          return { ...projectData.find((project) => project.repo === repoName), svn_url: repositoryData.svn_url };
        } else {
          throw new Error(`Failed to fetch repository data for ${repoName}: ${response.status}`);
        }
      })
    )
      .then((data) => {
        setRepositories(data);
      })
      .catch((error) => {
        console.error('Error fetching repositories data from GitHub API:', error);
      });
  }, []);

  return (
    <div id="projects" className="p-3 pt-5">
      <h2 className="text-center mb-3 underline-title">Check out some of my work:</h2>
      <div className="container">
        <div className="row">
          {repositories.map((project, index) => (
            <div className="col-md-6 mb-5" key={index}>
              <div className="image-container d-flex flex-column justify-content-between align-items-center">
                <h2 className="text-center m-3">
                  <a href={project.link} className="project-link"> 
                    {project.title}
                  </a>
                </h2>
                <p className="project-description text-center mb-5">{project.description}</p>
                <div className="d-flex w-100 justify-content-between align-items-center">
                  <a href={project.link} className="pic-link">
                    <img
                      src={project.image}
                      alt={project.altText}
                      className="img-fluid p-0 custom-image img-thumbnail"
                    />
                  </a>
                  <a href={project.svn_url} className="github-link" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                      alt="GitHub Logo"
                      className="github-logo img-thumbnail"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};



export default Projects;

// Project Data (images, links, etc.):
const projectData = [
  {
    title: 'Budget',
    repo: 'Budget',
    link: 'https://budget-unl0.onrender.com/',
    description:
      'A dynamic budgeting application using Flask, Python, SQL, JavaScript, PostgreSQL, HTML, and CSS, featuring dynamic divs/containers that enable users to easily track and manage their finances. (Be patient please, Render spins down with inactivity)',
    image: '/assets/Budget.jpg',
    altText: 'A handful of 100 bills fanned out',
  },
  {
    title: 'Wellness Tracker',
    repo: 'Wellness-Tracker',
    link: 'https://quiet-entremet-f8601f.netlify.app/',
    description:
      'Comprehensive wellness tracking application utilizing React, TypeScript, Flask, Python, HTML, CSS, SQL, PostgreSQL, Auth0, and the Nutritionix API, featuring a user-friendly interface for tracking food and water intake, complete with an intuitive autocomplete search bar for food selection.',
    image: '/assets/Wellness.jpg',
    altText: 'Sunset in mountain landscape with someone stretching / doing yoga',
  },
  {
    title: 'Library (React)',
    repo: 'library_project_react',
    link: 'https://ubiquitous-entremet-ec2600.netlify.app/#/',
    description:
      'One of my early projects, a user-friendly library/book catalog using React. Providing a glimpse into my journey of growth and proficiency in web development.',
    image: '/assets/Library_React.jpg',
    altText: 'Inside of multistory library, people and bookcases everywhere',
  },
  {
    title: 'Library (Flask)',
    repo: 'books_app',
    link: 'https://smooth-forest-roquefort.glitch.me/',
    description:
      'Another early project, a similar user-friendly library/book catalog. This is also another glimpse into my journey of growth and learning. However, this uses Flask instead of React.',
    image: '/assets/Library_Flask.jpg',
    altText: 'First person point of view, reading a book with mountain landscape in background',
  },
];