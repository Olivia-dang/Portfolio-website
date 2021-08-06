import React from "react";
import "./Home.css";
import sharedstyles from "../../stylesheets/Body.module.css";

export default function Home() {
  return (
    <div>
      <div className="header-home">
        <section className="header-text">
          <p>Hey, I'm</p>
          <h1>Olivia Dang</h1>
        </section>
      </div>
      <div className={sharedstyles.bodyContainer}>
        <article className="article">
          <h2 className="article-title">About me</h2>
          <p>
            My name is Phuong Anh Dang, you can call me Olivia. I am a
            full-stack developer with good knowledge of front-end techniques. I
            am an enthusiastic person who genuinely wants to develop the
            necessary skills and qualities to have a successful career and
            future. Also I like working in a team, I'll learn faster and much
            more. As the saying goes: 'two heads are better than one'.
          </p>
        </article>

        <article className="article">
          <h2 className="article-title">How I became a developer</h2>
          <p>
            I had a bachelor degree and a master degree in International
            Business. I worked as an account manager - a sales and marketing
            position for IT companies for about 3 years. I helped entrepreneurs
            and companies by offering fixed-cost packages or a dedicated team of
            developers. I love technology and would like to code, so I studied a
            IT diploma bootcamp to become a full-stack developer.
          </p>
          <p>
            When working in a team, I tried to follow Agile methodology with
            Trello board, planning, review and daily standup meetings. I usually
            conform with Test-driven development for testing along with coding.
            I used Git and GitHub as source version control.{" "}
          </p>
          <img
            className="passion-img"
            src="/images/passion.jpg"
            alt="Passion led us here"
          />
        </article>

        <article className="article">
          <h2 className="article-title">Why me</h2>
          <p>
            I am a valuable person for any team because of my proven ability to
            build efficient front-end user interfaces in line with modern best
            practices. I am experienced in using JavaScript, as well as the
            React framework, to develop front-end applications. I also have
            experience building Rails API and image uploading to AWS S3.
          </p>
          <p>
            With my past experience and my communication skill, I believe that I
            would be a very valuable team member. I always put myself in the
            other person’s position and treat them the way I’d want to be
            treated. My customer-oriented mindset will help the company to have
            long-term relationships with any client.
          </p>
        </article>
        <article className="article">
          <h2 className="article-title">My Passion</h2>
          <p>
            I have always been interested in Technology since I was young. For
            the last 3 years, I habour my dream to learn coding and now I made
            it real. As a software developer, I’m passionate about creating
            truly beautiful, efficient digital products to make people’s
            experience with technology memorable. I love people's positive
            feedback on my application.
          </p>
          <p>
            Another passion is learning actual new languages. I’m born and
            raised in Vietnam, so I’m fluent in Vietnamese. Besides English as a
            foreign language, I can speak and listen to Korean and Mandarin at a
            basic level. Learning a new language and learning to code are quite
            similar in some ways. I have to be patient, creative, hard-working
            and persistent.
          </p>
        </article>
      </div>
    </div>
  );
}
