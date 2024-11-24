import "./about.css";

export default function Page(){
    return (
      <div className="page-container">
        <div className="content-container">
          <img 
            className="about-picture"
            src="/images/home-image.JPG" 
            alt="Picture of Austin Adams"
          />
          <span className="brief-intro">
            <h2>Introduction</h2>
            <p>
              Hi, I'm Austin, a passionate software engineer with a focus on building efficient and scalable applications. 
              I specialize in SaaS development and have experience working with various programming languages. 
              I am currently pursuing a Computer Science degree at Louisiana Tech University, where I am honing my skills in areas like cybersecurity, digital forensics, and web development. 
              My technical skills are listed below. I enjoy tackling complex problems and continuously strive to improve both my technical and soft skills. When I'm not coding, you can find me exploring new technologies or working on personal projects.
            </p>
          </span>
        </div>
        <div className="content-container grid grid-cols-4 gap-4 p-4 justify-center">

          <div className="p-4">
            <h1 className="skills-heading">Programming Languages</h1>
            <ul className="skills-list">
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>SQL</li>
              <li>Assembly</li>
              <li>Bash</li>
              <li>C++</li>
              <li>C#</li>
            </ul>
          </div>

          <div className="p-4">
            <h1 className="skills-heading">Tools & Frameworks</h1>
            <ul className="skills-list">
              <li>Tailwind CSS</li>
              <li>Firebase</li>
              <li>AWS</li>
              <li>REACT</li>
              <li>Markdown</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>Docker</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Figma</li>
              <li>GitHub</li>
            </ul>
          </div>

          <div className="p-4">
            <h1 className="skills-heading">Technical & Developing Skillsets</h1>
            <ul className="skills-list">
              <li>SaaS application development</li>
              <li>Cybersecurity projects</li>
              <li>API Development & IntegrationC</li>
              <li>Networking projects</li>
              <li>Database Design & Management (MySQL, MariaDB)</li>
              <li>Technical/Professional documentation</li>
              <li>Penetration testing</li>
              <li>Collaboration with Git and Github</li>
            </ul>
          </div>

          <div className="p-4">
            <h1 className="skills-heading">Specialized Knowledge</h1>
            <ul className="skills-list">
              <li>Software Engineering</li>
              <li>Programming & Development</li>
              <li>Cloud Computing</li>
              <li>DevOps</li>
              <li>Project Management</li>
            </ul>
          </div>

        </div>
      </div>
    );
}