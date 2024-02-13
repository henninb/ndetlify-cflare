import './Home.css';

export default function Home() {
    return (
      <div>
           <header>
            <div class="logo">
                <img src="img/brian-blocks.png" alt="" />
            </div>
            <div class="navigation">
            <div class="userBx">
               <div class="imgBx">
                <img src="img/photo-brian-henning-nobackground.png" alt="user avatar" />
              </div>
              <p class="username">Profile</p>
           </div>
            <span class="menuToggle"></span>
                <ul class="menu">
                    <li class="nav__item"><a href="#home" class="nav__link">Home</a></li>
                    <li class="nav__item"><a href="#services" class="nav__link">My Services</a></li>
                    <li class="nav__item"><a href="#about" class="nav__link">About me</a></li>
                    <li class="nav__item"><a href="#work" class="nav__link">My Work</a></li>
                </ul>
            </div>
        </header>

        <section class="intro" id="home">
            <h1 class="section__title section__title--intro">
                Hi, I am <strong>Brian Henning</strong>
            </h1>
            <p class="section__subtitle section__subtitle--intro">solutions engineer</p>
            <img src="img/photo-brian-henning-nobackground.png" alt="Brian Henning smiling" class="intro__img" />
        </section>

        <section class="my-services" id="services">
            <h2 class="section__title section__title--services">What I do</h2>
            <div class="services">
                <div class="service">
                    <h3>Software Development</h3>
                    <p style={{ textAlign: 'left' }}>As a software developer, I've led and contributed to projects that span across various programming languages and technologies. My experience encompasses developing robust software solutions, migrating systems to enhance efficiency and security, and innovating within the tech landscape. I take pride in my ability to adapt to technological shifts, master new skills, and apply my knowledge in practical, impactful ways. My journey from engineering to leading security-focused initiatives reflects my passion for not just meeting, but exceeding the technical and security standards expected in today's digital world.</p>
                </div>

                <div class="service">
                    <h3>Technical Sales</h3>
                    <p>In the realm of technical sales, I thrive on merging my deep technical knowledge with strategic sales techniques to meet the complex needs of clients. My approach involves understanding the intricacies of technology and effectively communicating its benefits to non-technical stakeholders. This skill set has enabled me to not only close deals but also build lasting relationships with clients by ensuring that the solutions I offer truly align with their objectives and challenges. My success in technical sales stems from a blend of expertise, adaptability, and a genuine commitment to solving customer problems.</p>
                </div>

                <div class="service">
                    <h3>Cyber Security</h3>
                    <p>In my role focusing on cybersecurity, I have spearheaded initiatives to significantly improve system security, demonstrating my capability to identify vulnerabilities and implement strategic defenses. My efforts have resulted in enhanced secure coding practices and a notable increase in security metrics, reflecting my commitment to safeguarding sensitive information and systems. My work emphasizes proactive problem-solving and a deep understanding of the cybersecurity landscape, ensuring compliance and protection against evolving threats.</p>
                </div>
            </div>

            <a href="#work" class="btn">My Work</a>
        </section>

        <section class="about-me" id="about">
           <h2 class="section__title section__title--about">Who I am</h2>
           <p class="section__subtitle section__subtitle--about">Technical seller based out of Minneapolis</p>

           <div class="about-me__body">
               <p>I'm Brian Henning, a seasoned professional in the realms of software development, sales, and cybersecurity. My journey has been marked by a dedication to creating innovative software solutions, a knack for strategically closing sales, and a commitment to enhancing cybersecurity measures. My role as a solutions engineer has allowed me to blend my technical expertise with my ability to understand and meet customer needs, driving sustainable growth and securing key deals. In cybersecurity, I've led initiatives that significantly bolstered system security, showcasing my ability to navigate complex challenges and implement robust protections. This blend of skills underscores my holistic approach to tackling today's digital challenges, aiming to contribute meaningfully to the success of the organizations I work with.</p>
           </div>

           <img src="img/brian-with-maggie.jpg" alt="Brian with one of his 3 daughters" class="about-me__img" />
        </section>

        <section class="my-work" id="work">
            <h2 class="section__title section__title--work">My work</h2>
            <p class="section__subtitle section__subtitle--work">A selection of my range of work</p>

            <div class="portfolio">
                <a href="portfolio-item.html" class="portfolio__item">
                    <img src="img/portfolio-01.jpg" alt="React Finance Application" class="portfolio__img" />
                </a>

                <a href="portfolio-item.html" class="portfolio__item">
                    <img src="img/portfolio-02.jpg" alt="Proxmox Server" class="portfolio__img" />
                </a>

                <a href="pfsense-portfolio-item.html" class="portfolio__item">
                    <img src="img/portfolio-03.jpg" alt="pFsense Router" class="portfolio__img" />
                </a>

                <a href="portfolio-item.html" class="portfolio__item">
                    <img src="img/portfolio-04.jpg" alt="item4" class="portfolio__img" />
                </a>

                <a href="portfolio-item.html" class="portfolio__item">
                    <img src="img/portfolio-05.jpg" alt="item5" class="portfolio__img" />
                </a>

                <a href="portfolio-item.html" class="portfolio__item">
                    <img src="img/portfolio-06.jpg" alt="item6" class="portfolio__img" />
                </a>

                <a href="portfolio-item.html" class="portfolio__item">
                    <img src="img/portfolio-07.jpg" alt="item7" class="portfolio__img" />
                </a>

                <a href="portfolio-item.html" class="portfolio__item">
                    <img src="img/portfolio-08.jpg" alt="item8" class="portfolio__img" />
                </a>

                <a href="portfolio-item.html" class="portfolio__item">
                    <img src="img/portfolio-09.jpg" alt="item9" class="portfolio__img" />
                </a>

                <a href="portfolio-item.html" class="portfolio__item">
                    <img src="img/portfolio-10.jpg" alt="item0" class="portfolio__img" />
                </a>
            </div>
        </section>


        <footer class="footer">
            <a href="mailto:henninb@gmail.com" class="footer__link">henninb@gmail.com</a>
            <ul class="social-list">
                <li class="social-list__item">
                    <a class="social-list__link" href="https://codepen.io/henninb/projects">
                        <i class="fab fa-codepen"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://dribbble.com/henninb">
                        <i class="fab fa-dribbble"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://www.linkedin.com/in/brian-henning-9213bb5/">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://twitter.com/henninb">
                        <i class="fab fa-twitter"></i>
                    </a>
                </li>
                <li class="social-list__item">
                    <a class="social-list__link" href="https://github.com/henninb">
                        <i class="fab fa-github"></i>
                    </a>
                </li>
            </ul>
        </footer>
      </div>
    );
};
