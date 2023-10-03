import React from 'react';

const Projects = () => {
  return (
    <div id="projects" className="p-3 mt-5">
      <h2 class="text-center mb-4">Check out some of my work</h2>
      <div className="container">
        <div className="row">
          {projectData.map((project, index) => (
            <div className="col-sm-6 mb-5" key={index}>
              <a href={project.link} className="pic-link">
                <div className="image-container d-flex flex-column justify-content-between align-items-center">
                  <h2 className="text-center m-3">{project.title}</h2>
                  <p className="project-description text-center">
                    {project.description}
                  </p>
                  <img
                    src={project.image}
                    alt={project.altText}
                    className="img-fluid p-0 custom-image"
                  />
                </div>
              </a>
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
    link: 'https://budget-unl0.onrender.com/',
    description:
      'A dynamic budgeting application using Flask, Python, SQL, JavaScript, PostgreSQL, HTML, and CSS, featuring dynamic divs/containers that enable users to easily track and manage their finances. (Be patient please, Render spins down with inactivity)',
    image: 'src/assets/Budget.jpg',
    altText: 'A handful of 100 bills fanned out',
  },
  {
    title: 'Wellness Tracker',
    link: 'https://quiet-entremet-f8601f.netlify.app/',
    description:
      'Comprehensive wellness tracking application utilizing React, TypeScript, Flask, Python, HTML, CSS, SQL, PostgreSQL, Auth0, and the Nutritionix API, featuring a user-friendly interface for tracking food and water intake, complete with an intuitive autocomplete search bar for food selection.',
    image: 'src/assets/Wellness.jpg',
    altText: 'Sunset in mountain landscape with someone stretching / doing yoga',
  },
  {
    title: 'Library (React)',
    link: 'https://ubiquitous-entremet-ec2600.netlify.app/#/',
    description:
      'One of my early projects, a user-friendly library/book catalog using React. Providing a glimpse into my journey of growth and proficiency in web development.',
    image: 'src/assets/Library_React.jpg',
    altText: 'Inside of multistory library, people and bookcases everywhere',
  },
  {
    title: 'Library (Flask)',
    link: 'https://smooth-forest-roquefort.glitch.me/',
    description:
      'Another early project, a similar user-friendly library/book catalog. However, this uses Flask instead of React.',
    image: 'src/assets/Library_Flask.jpg',
    altText: 'First person point of view, reading a book with mountain landscape in background',
  },
];