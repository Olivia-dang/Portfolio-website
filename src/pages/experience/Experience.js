import React from "react";
import "./Experience.css";
import headerstyles from "../../stylesheets/Header.module.css";
import bodystyles from "../../stylesheets/Body.module.css";
import { ReactComponent as Star } from "../../assets/full-star.svg";
import { ReactComponent as LinkIcon } from "../../assets/link-icon.svg";
import { ReactComponent as EmptyStar } from "../../assets/empty-star.svg";

export default function Experience() {
  return (
    <div>
      <div className={headerstyles.headerBackground}>
        <section className={headerstyles.headerText}>
          <h1>Experience</h1>
        </section>
      </div>
      <div className={bodystyles.bodyContainer}>
        <section className="skills-container">
          <h2 className="section-name">Skills</h2>
          <div className="skills-rows">
            <div className="col-50">
              <ul className="no-bullet">
                <li>
                  <span className="skills-title">HTML</span>
                  <span className="skills-score">
                    <Star />
                    <Star />
                    <Star />
                    <EmptyStar />
                    <EmptyStar />
                  </span>
                </li>
                <li>
                  <span className="skills-title">CSS</span>
                  <span className="skills-score">
                    <Star />
                    <Star />
                    <Star />
                    <EmptyStar />
                    <EmptyStar />
                  </span>
                </li>
                <li>
                  <span className="skills-title">JavaScript</span>
                  <span className="skills-score">
                    <Star />
                    <Star />
                    <Star />
                    <EmptyStar />
                    <EmptyStar />
                  </span>
                </li>
                <li>
                  <span className="skills-title">ReactJS</span>
                  <span className="skills-score">
                    <Star />
                    <Star />
                    <Star />
                    <EmptyStar />
                    <EmptyStar />
                  </span>
                </li>
                <li>
                  <span className="skills-title">Ruby on Rails</span>
                  <span className="skills-score">
                    <Star />
                    <Star />
                    <Star />
                    <EmptyStar />
                    <EmptyStar />
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-50">
              <ul className="no-bullet">
                <li>
                  <span className="skills-title">NodeJS</span>
                  <span className="skills-score">
                    <Star />
                    <Star />
                    <Star />
                    <EmptyStar />
                    <EmptyStar />
                  </span>
                </li>
                <li>
                  <span className="skills-title">TypeScript</span>
                  <span className="skills-score">
                    <Star />
                    <Star />
                    <Star />
                    <EmptyStar />
                    <EmptyStar />
                  </span>
                </li>
                <li>
                  <span className="skills-title">Amazon Web Services</span>
                  <span className="skills-score">
                    <Star />
                    <Star />
                    <Star />
                    <EmptyStar />
                    <EmptyStar />
                  </span>
                </li>
                <li>
                  <span className="skills-title">MySQL</span>
                  <span className="skills-score">
                    <Star />
                    <Star />
                    <Star />
                    <EmptyStar />
                    <EmptyStar />
                  </span>
                </li>
                <li>
                  <span className="skills-title">PostgreSQL</span>
                  <span className="skills-score">
                    <Star />
                    <Star />
                    <Star />
                    <EmptyStar />
                    <EmptyStar />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <hr/>
        <div>
          <h2 className="section-name">Experience</h2>
          <div className="experience-container">
            <section className="experience-row">
              <div className="col-30">
                <h4 className="company-name">Coder Academy</h4>
                <p className="experience-period">Feb 2021 - current</p>
              </div>
              <article className="col-70">
                <strong>Junior Full-stack Developer</strong>
                <ul>
                  <li>
                    Learning as a Junior Web Developer and participating in
                    coding, testing, debugging new applications and website
                    independently or in a team to create digital tools.
                  </li>
                  <li>
                    Studied HTML, CSS, JavaScript, Ruby on Rails, PostgreSQL,
                    ReactJS, Rails API.
                  </li>
                  <li>
                    Evaluated functionality and accessibility of Web Pages.
                  </li>
                  <li>
                    Giving presentation every fortnight to improve communication
                    skills
                  </li>
                </ul>
                <p className="company-link">
                  <LinkIcon />
                  <a href="https://coderacademy.edu.au/">
                    coderacademy.edu.au/
                  </a>
                </p>
              </article>
            </section>
            <section className="experience-row">
              <div className="col-30">
                <h4 className="company-name">
                  Twenty Tech | IT outsourcing company
                </h4>
                <p className="experience-period">May 2018 - Dec 2020</p>
              </div>
              <article className="col-70">
                <strong>Account Manager</strong>
                <ul>
                  <li>
                    Business development: built sales and marketing strategy;
                    proactively approached new clients, collected business
                    requirements for website/software development to provide
                    quote estimation thereof.
                  </li>
                  <li>
                    Account management: maintained client relations; coordinated
                    with internal departments such as pre-sales team and
                    Production team to consult and engage clients more deeply;
                    support project management when necessary.
                  </li>
                  <li>
                    Team management: gave training and instructions for the
                    team. Be an inspiring leader to drive the team to
                    organizational objectives.
                  </li>
                </ul>
                <p className="company-link">
                  <LinkIcon />
                  <a href="https://twenty-tech.com/">Twenty-tech.com</a>
                </p>
              </article>
            </section>
            <section className="experience-row">
              <div className="col-30">
                <h4 className="company-name">
                  CMC Global | IT outsourcing company
                </h4>
                <p className="experience-period">Aug 2017 - April 2018</p>
              </div>
              <article className="col-70">
                <strong>Sales Support</strong>
                <ul>
                  <li>Customer data management</li>
                  <li>
                    Supported Account manager with business activities like
                    building customer relations, making proposals, contracts.
                  </li>
                  <li>
                    Customer care: provided troubleshooting assistance for
                    customer orders, dealing with requests and relevant
                    problems.
                  </li>
                </ul>
                <p className="company-link">
                  <LinkIcon />
                  <a href="https://www.cmcglobal.com.vn/">cmcglobal.com.vn/</a>
                </p>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
