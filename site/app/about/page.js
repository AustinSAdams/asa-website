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
            <h1 className="text-lg font-bold mb-2 text-blue-500">Programming Languages</h1>
            <ul className="list-disc pl-5 text-white">
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Markdown</li>
              <li>TypeScript</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>SQL</li>
              <li>C++</li>
              <li>C#</li>
            </ul>
          </div>

          <div className="p-4">
            <h1 className="text-lg font-bold mb-2 text-blue-500">Tools & Frameworks</h1>
            <ul className="list-disc pl-5 text-white">
              <li>Tailwind CSS</li>
              <li>Firebase</li>
              <li>AWS</li>
              <li>REACT</li>
              <li>MySQL</li>
              <li>MariaDB</li>
              <li>NextJS</li>
              <li>NodeJS</li>
              <li>JSON</li>
              <li>GitHub</li>
              <li>Visual Studio Code</li>
              <li>Visual Studio</li>
            </ul>
          </div>

          <div className="p-4">
            <h1 className="text-lg font-bold mb-2 text-blue-500">Technical & Developing Skillsets</h1>
            <ul className="list-disc pl-5 text-white">
              <li>SaaS application development</li>
              <li>Cybersecurity projects</li>
              <li>Networking projects</li>
              <li>Relational database design and management</li>
              <li>Technical/Professional documentation</li>
              <li>Penetration testing</li>
              <li>Frontend styling (CSS integrated with Tailwind)</li>
            </ul>
          </div>

          <div className="p-4">
            <h1 className="text-lg font-bold mb-2 text-blue-500">Specialized Knowledge</h1>
            <ul className="list-disc pl-5 text-white">
              <li>Software Engineering</li>
              <li>Programming & Development</li>
              <li>Cybersecurity & Networking</li>
              <li>Project Management</li>
              <li>"People" Skills & Communication</li>
            </ul>
          </div>

        </div>
      </div>
    );
}