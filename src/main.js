import './style.css'

document.querySelector('#app').innerHTML = `
  <header>
    <nav>
      <h2>Cloud<span>Ops.</span></h2>
      <div class="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  </header>

  <main>
    <section class="hero">
      <p class="tag">CLOUD & DEVOPS ENGINEERING</p>
      <h1>Building reliable systems.<br>
      <span>Automating the future.</span></h1>
      <p class="intro">
        Exploring cloud infrastructure, automation,
        deployment pipelines and scalable systems.
      </p>
      <a href="#projects" class="btn">Explore My Projects →</a>
    </section>

    <section id="about">

      <h2>ABOUT MYSELF LISTING </h2>
      <h2>About Me</h2>
      <h3>I am Learning and making projects of CI/CD</h3>


      <p>
        I am an aspiring Cloud and DevOps Engineer interested
        in cloud infrastructure, automation and modern deployment
        technologies and want to learn further
      </p>
    </section>

    <section id="skills">
      <h2>Technical Skills</h2>
      <div class="skills">
        <div>AWS</div>
        <div>Linux</div>
        <div>Git & GitHub</div>
        <div>Terraform</div>
        <div>Docker</div>
        <div>CI/CD</div>
      </div>
    </section>

    <section id="projects">
      <h2>Projects</h2>
      <div class="project">
        <p class="tag">PROJECT 01</p>
        <h3>Automated CI/CD Deployment</h3>
        <p>
          A website deployment pipeline using GitHub,
          GitHub Actions and Vercel.
        </p>
        <p class="status">● Currently in development</p>
      </div>
    </section>

    <section id="contact">
      <h2>Let's Connect</h2>
      <p>Interested in cloud technology and automation.</p>
    </section>
  </main>

  <footer>
    <p>© 2026 CloudOps Portfolio | Built with Vite</p>
  </footer>
`
