import "./about.css";

export default function Page(){
    return (
        <div className="page-container">
      <div className="content-container">
        <span className="introduction-container">
          <p 
            style={{fontSize: '24px', fontFamily: "'Courier New', Courier, monospace"}}
          >Austin Adams</p>
          <p
            style={{fontSize: '40px', color: '#ffffff',
              fontWeight: 'bold',
              fontStyle: 'italic',
              textDecoration: 'underline',
              textDecorationColor: '#7d0101'}}
          >Software Engineer</p>
          <p style={{color: '#a90000',
            fontSize: '40px',
            fontWeight: 'bold',
            fontStyle: 'italic',
            textDecoration: 'underline',
            textDecorationColor: '#7d0101'
          }}>& Web Developer</p>
          <p
            style={{fontSize: '20px', color: 'gold'}}
          ><br/>I'm a Software Engineer specializing in full-stack development, from UI/UX design to cybersecurity and complex data analysis. Passionate about creating innovative solutions that enhance user experience and drive efficiency.</p>
        </span>
        <img 
          src="/images/home-image.jpg"
          alt="Image of Austin Adams"
          className="introduction-image"
        />
      </div>
      <div className="content-container">
        <span className="introduction-container">
              <p>What I do</p>
        </span>
      </div>
    </div>
    );
}