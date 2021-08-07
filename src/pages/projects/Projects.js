import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div>
      <section class="featured-story">
        <a
          class="featured-story-link"
          href="https://github.com/Olivia-dang/sakura-wedding"
        >
          <img
            class="featured-story-image"
            alt="wedding-dress"
            src="images/wedding-dress.jpg"
          />
          <div class="featured-story-content">
            <h2 class="featured-story-heading">Sakura Wedding</h2>
            <p class="featured-story-description ">
              Want to buy or sell a wedding dress? Welcome to our two-sided
              marketplace, where users can buy, sell dresses; chat with each
              other; leave comments for a product and for a seller
            </p>
            <p class="featured-story-description latte-link">
              Find out more...
            </p>
          </div>
        </a>
      </section>
      <section class="responsive-container">
        <h2 class="more-stories-heading">More projects</h2>
        <div class="more-stories-container">
          <a
            class="story"
            href="https://github.com/Olivia-dang/Machi-Ramen-Documentation"
          >
            <img class="story-image" alt="ramen" src="images/ramen.png" />
            <h3 class="story-heading">Japanese restaurant website</h3>
            <p class="story-description">
              <p>Created: July 2021</p>
              <p>Technologies and Tools: ReactJS, Rails API, AWS S3</p>
              <p>
                Responsibility: I was in charge of the backend API and the React
                coding. My teammate did the Tailwinds CSS styling.
              </p>
              <p>
                Challenges included integration, making the ReactJS and Rails
                API to "communicate", testing with Jest, RSpec, and Cypress.
                Image uploading to AWS S3 was also challenging. After
                investigation, reading documentation, and blogs, I figured out
                how to solve the problems.
              </p>
              <p>https://github.com/Olivia-dang/Machi-Ramen-Documentation</p>
            </p>
          </a>

          <a class="story" href="https://github.com/Olivia-dang/sakura-wedding">
            <img
              class="story-image"
              alt="wedding-dress"
              src="images/wedding-dress.jpg"
            />
            <h3 class="story-heading">Sakura Wedding</h3>
            <p class="story-description">
              <p>Created: May 2021</p>
              <p>
                Technologies and Tools: PostgreSQL, Ruby on Rails, HTML, CSS,
                Bootstrap, Github, Trello, Figma, AWS, Heroku, Stripe...
              </p>
              <p>
                Challenges included limited time for the full development
                process; using complex associations for models; bootstrap
                constraint when customizing layouts for each page,
              </p>
              <p>
                Solutions included prioritizing tasks for better time
                management, doing research, reading documentation, seeing
                instructions as a reference, and investigating errors to debug.
              </p>
              <p>https://github.com/Olivia-dang/sakura-wedding</p>
            </p>
          </a>
          <a class="story" href="/">
            <img
              class="story-image"
              alt="portfolio"
              src="images/portfolio.png"
            />
            <h3 class="story-heading">Portfolio website</h3>
            <p class="story-description">
              <p>Created: March 2021</p>
              <p>Description: Personal portfolio website</p>
              <p>
                Challenges included creating a good design and good UI, CSS
                constraints, and an unresponsive header.
              </p>
              <p>Link</p>
            </p>
          </a>
        </div>
      </section>
    </div>
  );
}
