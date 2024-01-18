import photocv from '../../img/photoc2circlev.png';
import linkdin from '../../img/linkedin.png';
import experiencepic from '../../img/experience.png';
import arrow from '../../img/arrow.png';
import cv from './assets/cv.pdf';
import email from '../../img/email.png';
import education from '../../img/education.png';
import checkmark from '../../img/checkmark.png';
import vincieats from '../../img/vinci-eats-high-resolution-logo-black.png';
import workpng from '../../img/work.png';
import pic3 from '../../img/photoc2v.png';

const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML =renderhomepage();
};

function renderhomepage(){
  const footer = `<section id="profile">
  <div class="section__pic-container">
    <img src="${photocv}" alt="John Doe profile picture" />
  </div>
  <div class="section__text">
    <p class="section__text__p1">Hello, I'm</p>
    <h1 class="title">HAZIQ</h1>
    <p class="section__text__p2">Student in informatics</p>
    <div class="btn-container">
    <button class="btn btn-color-2" onclick="window.open('${cv}')">
    Download CV
  </button>
  
      <button class="btn btn-color-1" onclick="location.href='./#contact'">
        Contact Info
      </button>
    </div>
    <div id="socials-container">
      <img
        src="${linkdin}"
        alt="My LinkedIn profile"
        class="icon"
        onclick="location.href='https://linkedin.com/'"
      />
      <img
        src="${email}"
        alt="My Github profile"
        class="icon"
        onclick="(function() { window.location.href = 'mailto:muhammad.haziq@student.vinci.be'; })()"
      />
    </div>
  </div>
</section>
<section id="about">
  <p class="section__text__p1">Get To Know More</p>
  <h1 class="title">About Me</h1>
  <div class="section-container">
    <div class="section__pic-container">
      <img
        src="${pic3}"
        alt="Profile picture"
        class="about-pic"
      />
    </div>
    <div class="about-details-container">
      <div class="about-containers">
        <div class="details-container">
          <img
            src="${experiencepic}"
            alt="Experience icon"
            class="icon"
          />
          <h3>Experience</h3>
          <p>  <br />  I'm still on my educational journey </p>
        </div>
        <div class="details-container">
          <img
            src="${education}"
            alt="Education icon"
            class="icon"
          />
          <h3>Education</h3>
          <p>IT MANAGEMENT Bachelor(2021-2024)<br />CESS(2020)</p>
        </div>
      </div>
      <div class="text-container">
        <p>
        Hello! I'm Haziq, a passionate informatics student. I love exploring the realms of both frontend and backend development. 
        My educational journey includes pursuing a Bachelor's degree in IT Management from 2021 to 2024, and I completed my CESS in 2020.
        <br />
        <br />
        Feel free to explore more about my experiences, projects, and don't hesitate to get in touch for potential collaborations or inquiries.
        Looking forward to connecting with you!
        </p>
      </div>
    </div>
  </div>
  <img
    src="${arrow}"
    alt="Arrow icon"
    class="icon arrow"
    onclick="location.href='./#experience'"
  />
</section>
<section id="experience">
  <p class="section__text__p1">Explore My</p>
  <h1 class="title">Experience</h1>
  <div class="experience-details-container">
    <div class="about-containers">
      <div class="details-container">
        <h2 class="experience-sub-title">Development</h2>
        <div class="article-container">
          <article>
            <img
              src="${checkmark}"
              alt="Experience icon"
              class="icon"
            />
            <div>
              <h3>HTML&CSS</h3>
              <p>Experienced</p>
            </div>
          </article>
          
          <article>
            <img
              src="${checkmark}"
              alt="Experience icon"
              class="icon"
            />
            <div>
              <h3>JavaScript</h3>
              <p>Experienced</p>
            </div>
          </article>

          <article>
            <img
              src="${checkmark}"
              alt="Experience icon"
              class="icon"
            />
            <div>
              <h3>PostgreSQL</h3>
              <p>Experienced</p>
            </div>
          </article>
          <article>
            <img
              src="${checkmark}"
              alt="Experience icon"
              class="icon"
            />
            <div>
              <h3>JAVA</h3>
              <p>Intermediate</p>
            </div>
          </article>
          
          <article>
            <img
              src="${checkmark}"
              alt="Experience icon"
              class="icon"
            />
            <div>
              <h3>EXCEL</h3>
              <p>Intermediate</p>
            </div>
          </article>

          <article>
          <img
            src="${checkmark}"
            alt="Experience icon"
            class="icon"
          />
          <div>
            <h3>GIT</h3>
            <p>Intermediate</p>
          </div>
        </article>
        </div>
      </div>
      <div class="details-container">
        <h2 class="experience-sub-title">Languages</h2>
        <div class="article-container">
          <article>
            <img
              src="${checkmark}"
              alt="Experience icon"
              class="icon"
            />
            <div>
              <h3>French</h3>
              <p>EXCELLENT</p>
            </div>
          </article>
          <article>
            <img
              src="${checkmark}"
              alt="Experience icon"
              class="icon"
            />
            <div>
              <h3>English</h3>
              <p>B2</p>
            </div>
          </article>
          <article>
            <img
              src="${checkmark}"
              alt="Experience icon"
              class="icon"
            />
            <div>
              <h3>URDU</h3>
              <p>EXCELLENT</p>
            </div>
          </article>
          <article>
            <img
              src="${checkmark}"
              alt="Experience icon"
              class="icon"
            />
            <div>
              <h3>DUTCH</h3>
              <p>A2</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
  <img
    src="${arrow}"
    alt="Arrow icon"
    class="icon arrow"
    onclick="location.href='./#projects'"
  />
  </section>
  <section id="projects">
    <p class="section__text__p1">Browse My Recent</p>
    <h1 class="title">Projects</h1>
    <div class="experience-details-container">
      <div class="about-containers">
        <div class="details-container color-container">
          <div class="article-container">
            <img
              src="${vincieats}"
              alt="Project 1"
              class="project-img"
            />
          </div>
          <h2 class="experience-sub-title project-title">VINCI EATS</h2>
          <div class="btn-container">
            <button
              class="btn btn-color-2 project-btn"
              onclick="location.href='https://github.com/e-vinci/web2-2023-project-group_23'"
            >
              Github
            </button>
            <button
              class="btn btn-color-2 project-btn"
              onclick="location.href='https://github.com/'"
            >
              Live (coming soon)
            </button>
          </div>
        </div>
        <div class="details-container color-container">
          <div class="article-container">
            <img
              src="${workpng}"
              alt="Project 2"
              class="project-img"
            />
          </div>
          <h2 class="experience-sub-title project-title">Project Two</h2>
          <div class="btn-container">
            <button
              class="btn btn-color-2 project-btn"
              onclick="location.href='https://github.com/'"
              disabled  <!-- Ajout de l'attribut disabled -->
            >
              Github
            </button>
            <button
              class="btn btn-color-2 project-btn"
              onclick="location.href='https://github.com/'"
              disabled  <!-- Ajout de l'attribut disabled -->
            >
              Live Demo
            </button>
          </div>
        </div>
        <div class="details-container color-container">
          <div class="article-container">
            <img
              src="${workpng}"
              alt="Project 3"
              class="project-img"
            />
          </div>
          <h2 class="experience-sub-title project-title">Project Three</h2>
          <div class="btn-container">
            <button
              class="btn btn-color-2 project-btn"
              onclick="location.href='https://github.com/'"
              disabled  <!-- Ajout de l'attribut disabled -->
            >
              Github
            </button>
            <button
              class="btn btn-color-2 project-btn"
              onclick="location.href='https://github.com/'"
              disabled  <!-- Ajout de l'attribut disabled -->
            >
              Live Demo
            </button>
          </div>
        </div>
      </div>
    </div>
    <img
      src="${arrow}"
      alt="Arrow icon"
      class="icon arrow"
      onclick="location.href='./#contact'"
    />
  </section>
  
<section id="contact">
  <p class="section__text__p1">Get in Touch</p>
  <h1 class="title">Contact Me</h1>
  <div class="contact-info-upper-container">
    <div class="contact-info-container">
      <img
        src="${email}"
        alt="Email icon"
        class="icon contact-icon email-icon"
      />
      <p><a href="mailto:muhammad.haziq@student.vinci.be">Muhammad.haziq@student.vinci.be</a></p>
    </div>
    <div class="contact-info-container">
      <img
        src="${linkdin}"
        alt="LinkedIn icon"
        class="icon contact-icon"
      />
      <p><a href="https://www.linkedin.com">LinkedIn</a></p>
    </div>
  </div>
</section> `

return footer;
}

export default HomePage;
