import React from 'react'
import { DiGithubBadge } from "react-icons/di";

export default ({ projectLinks }) => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>
      {
        projectLinks && projectLinks.map(({ title, status, link, description }, index) =>
          <div className="project-container">
            <div className="image">
            </div>
            <div className="desc">

              <h3>{title}</h3>
              <h4>{status}</h4>
              <p>
                {description}
              </p>


              <div className="button-container">
                <a href={link}><DiGithubBadge /> GitHub</a>
              </div>

            </div>
          </div>
        )
      }

    </section>
  )
}