import React from 'react'

export default function Home() {
    return (
        <div>
            <div>
            <section>
                <p>Hey, I'm</p>
                <h1>Phuong Anh Dang</h1>
            </section>
            </div>
            <div>
            <article className="article-1">
            <h2 className="section-name">About me</h2>
            <p>My name is Phuong Anh Dang, you can call me Olivia.
                I am a full-stack developer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, I'll learn faster and much more. As the saying goes: 'two heads are better than one'.
            </p>
        </article>
                
        <article className="article-2">
            <section className="art2-element">
                <h2 className="section-name">How I became a developer</h2>
                <p className="art2-col1">
                    I had a bachelor degree and a master degree in International Business. After 6 years of experience working in Sales and Marketing in software outsourcing companies. I realized that I love technology and would love to dive into this world. I quitted job as an account manager and changed my career path to become a developer. 
                </p>
            </section>
            <img className="passion-img" src="/images/passion.jpg" alt="Passion led us here"/>
        </article>
        
        <article className="article-3">
            <h2 className="section-name">Why me</h2>
            <p>
                I am a valuable person for any team because of my proven ability to build efficient front-end user interfaces in line with modern best practices. I am experienced in using JavaScript, as well as the React framework, to develop front-end applications.
            </p>
            <p>
                In my most recent job, I was tasked with making our website load quicker. Through my work I was able to improve loading and rendering times by 10%. I understand that you are looking for someone with knowledge of back-end technologies as well.
            </p>
            <p>
                I have spent my free time learning Ruby on Rails over the last few months, which I believe would be useful in this role. I would love the opportunity to use my skills for this position.
            </p>
        </article>
            </div>
        </div>
    )
}